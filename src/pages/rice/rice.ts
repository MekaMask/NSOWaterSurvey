import { SetRicePlantSelectPlant } from './../../states/household/household.actions';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { FieldFarmingComponent } from '../../components/field-farming/field-farming';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';
import { EX_RICH_LIST } from '../../models/tree';

@IonicPage()
@Component({
  selector: 'page-rice',
  templateUrl: 'rice.html',
})
export class RicePage {

  private submitRequested: boolean;
  f: FormGroup;

  @ViewChildren(FieldFarmingComponent) private fieldFarmings: FieldFarmingComponent[];
  DataList = EX_RICH_LIST;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture.ricePlant));

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.f = this.fb.group({
      'doing': [null, Validators.required],
      'fieldCount': [null, Validators.required],
      'fields': this.fb.array([]),
      '_id': [null],
    });

    this.setupFieldCountChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RicePage');
    this.formData$.subscribe(data => this.f.setValue(data));
  }

  ionViewDidEnter() {

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldFarmings.forEach(it => it.submitRequest());
    // let selectedMap = new Map<string, any>();
    // let selected = [];
    // selectedMap.forEach(v => selected.push(v));
    this.store.dispatch(new SetRicePlantSelectPlant(this.DataList));
    console.log("TTTTTTTTTTTTT");
    console.log(this.DataList);

  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupFieldCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fields = (this.f.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.f.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fields.length) {
          const fld = fields[i];
          ctrl = fld;
        } else {
          ctrl = FieldFarmingComponent.CreateFormGroup(this.fb);
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }


}
