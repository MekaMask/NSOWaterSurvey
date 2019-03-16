import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FieldMushroomComponent } from '../../components/field-mushroom/field-mushroom';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-mushroom',
  templateUrl: 'mushroom.html',
})
export class MushroomPage {
  public f: FormGroup;
  private submitRequested: boolean;

  @ViewChildren(FieldMushroomComponent) private fieldMushroom: FieldMushroomComponent[];

  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture.mushroomPlant));

  constructor(public navCtrl: NavController,private store: Store<HouseHoldState>, public navParams: NavParams, private fb: FormBuilder) {
    this.f = this.fb.group({
      "_id": [null, Validators.required],
      'doing': [null, Validators.required],
      'fieldCount': [null, Validators.required],
      'fields': this.fb.array([]),
    });

    this.setupPlantingCountChanges()
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.f.setValue(data));

    console.log('ionViewDidLoad MushroomPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldMushroom.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupPlantingCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fields = (this.f.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.f.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      fieldCount = Math.max(1, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fields.length) {
          const fld = fields[i];
          ctrl = fld;
        } else {
          ctrl = FieldMushroomComponent.CreateFormGroup(this.fb);
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
