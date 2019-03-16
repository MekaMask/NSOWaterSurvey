import { FieldDryCropPlantingComponent } from './../../components/field-dry-crop-planting/field-dry-crop-planting';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { map } from 'rxjs/operators';
import { SetAgronomyPlantSelectPlant } from '../../states/household/household.actions';
import { getHouseHoldSample } from '../../states/household';

@IonicPage()
@Component({
  selector: 'page-dry-crop-planting',
  templateUrl: 'dry-crop-planting.html',
})
export class DryCropPlantingPage {

  @ViewChildren(FieldDryCropPlantingComponent) private fieldDryCrop: FieldDryCropPlantingComponent[];

  public agronomyPlant: FormGroup;
  private submitRequested: boolean;
  shownData: string[];
  // TODO
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture.agronomyPlant));

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, public modalCtrl: ModalController, private store: Store<HouseHoldState>) {
    this.agronomyPlant = this.fb.group({
      "doing": [null, Validators.required],
      "fieldCount": [null, Validators.required],
      "fields": this.fb.array([]),
      "_id": [null],
    });
    this.setupFieldCountChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DryCropPlantingPage');
    // TODO
    this.formData$.subscribe(data => this.agronomyPlant.setValue(data));
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldDryCrop.forEach(it => it.submitRequest());
    console.log(this.agronomyPlant.value);

    let fields = this.agronomyPlant.get('fields').value as Array<any>;
    let selectedMap = new Map<string, any>();
    fields.forEach(f => {
      if (f.plantings && f.plantings.plants) {
        f.plantings.plants.forEach(p => selectedMap.set(p.code, p));
      }
    });
    let selected = [];
    selectedMap.forEach(v => selected.push(v));
    this.store.dispatch(new SetAgronomyPlantSelectPlant(selected));
    console.log("TTTTTTTTTTTTT");
    console.log(selected);

  }

  public isValid(name: string): boolean {
    var ctrl = this.agronomyPlant.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupFieldCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fieldDryCrop = (this.agronomyPlant.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.agronomyPlant.get(componentCount).value || 0;
      var field = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fieldDryCrop.length) {
          const fld = fieldDryCrop[i];
          ctrl = fld;
        } else {
          ctrl = FieldDryCropPlantingComponent.CreateFormGroup(this.fb);
        }

        field.push(ctrl);
      }
      this.agronomyPlant.setControl(componentFormArray, field);
    };

    this.agronomyPlant.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
