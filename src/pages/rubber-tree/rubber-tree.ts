import { SetRubberTreeSelectPlant } from './../../states/household/household.actions';
import { EX_RUBBER_LIST } from './../../models/tree';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { FieldRebbertreeComponent } from '../../components/field-rebbertree/field-rebbertree';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-rubber-tree',
  templateUrl: 'rubber-tree.html',
})
export class RubberTreePage {

  private submitRequested: boolean;
  public rubbertree: FormGroup;
  // TODO
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture.rubberTree));
  @ViewChildren(FieldRebbertreeComponent) private fieldrebbertree: FieldRebbertreeComponent[];
  DataList = EX_RUBBER_LIST;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.rubbertree = this.fb.group({

      "doing": [null, Validators.required],
      "fieldCount": [null, Validators.required],
      'fields': fb.array([]),
      "_id": [null],
    });

    this.setupFieldCountChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RubberTreePage');
    //TODO
    this.formData$.subscribe(data => this.rubbertree.setValue(data));
  }

  ionViewDidEnter() {

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldrebbertree.forEach(it => it.submitRequest());
    this.store.dispatch(new SetRubberTreeSelectPlant(this.DataList));
    console.log("TTTTTTTTTTTTT");
    console.log(this.DataList);

  }

  public isValid(name: string): boolean {
    var ctrl = this.rubbertree.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupFieldCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fieldRubbertree = (this.rubbertree.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.rubbertree.get(componentCount).value || 0;
      var field = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fieldRubbertree.length) {
          const fld = fieldRubbertree[i];
          ctrl = fld;
        } else {
          ctrl = FieldRebbertreeComponent.CreateFormGroup(this.fb);
        }

        field.push(ctrl);
      }
      this.rubbertree.setControl(componentFormArray, field);
    };

    this.rubbertree.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
