import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FieldHerbsPlantComponent } from '../../components/field-herbs-plant/field-herbs-plant';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getAgronomyPlantSelectPlant, getPerennialPlantSelectPlant, getRicePlantSelectPlant, getRubberTreeSelectPlant } from '../../states/household';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-herbs-plant',
  templateUrl: 'herbs-plant.html',
})
export class HerbsPlantPage {

  private submitRequested: boolean;
  public f: FormGroup;
  shownData: string[];
  Plant: string[];
  // TODO
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture.herbsPlant));
  private GetPlantDrycrop$ = this.store.select(getAgronomyPlantSelectPlant);
  private GetPlantPerennial$ = this.store.select(getPerennialPlantSelectPlant);
  private GetPlantRice$ = this.store.select(getRicePlantSelectPlant);
  private GetPlantRubber$ = this.store.select(getRubberTreeSelectPlant);
  listDryCropData: any = [];
  listPerenialData: any = [];
  listRiceData: any = [];
  listRubberData: any = [];
  listSumData: any = [];
  @ViewChildren(FieldHerbsPlantComponent) private fieldHerbsPlant: FieldHerbsPlantComponent[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, public modalCtrl: ModalController, private store: Store<HouseHoldState>) {
    this.f = this.fb.group({
      'doing': [null, Validators.required], //ในรอบ 12 เดือนที่ผ่านมาครัวเรือนนี้ได้ปลูกพืชผัก สมุนไพร หรือไม่
      'fieldCount': [null, Validators.required], // ถ้า “ปลูก” มีพื้นที่ปลูกพืชผัก สมุนไพร จ้านวนกี่แปลง
      'fields': this.fb.array([]),
      "_id": [null],
    });

    this.setupPlantingCountChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HerbsPlantPage');
    // TODO
    this.formData$.subscribe(data => this.f.setValue(data));
    // this.GetPlant$.subscribe(data =>this.f.get('fields').setValue(data));
    this.GetPlantRice$.subscribe(data => this.listRiceData = data);
    this.GetPlantDrycrop$.subscribe(data => this.listDryCropData = data);
    this.GetPlantRubber$.subscribe(data => this.listRubberData = data);
    this.GetPlantPerennial$.subscribe(data => this.listPerenialData = data);
    var sum = this.listDryCropData.concat(this.listPerenialData).concat(this.listRiceData).concat(this.listRubberData)
    this.listSumData = sum;
    console.log('Sumsss : ');
    console.log(this.listSumData)

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldHerbsPlant.forEach(it => it.submitRequest());
    console.log(this.f.value);
    let fields = this.f.get('fields').value as Array<any>;
    let selectedMap = new Map<string, any>();
    fields.forEach(f => {
      if (f.plantings && f.plantings.plants) {
        f.plantings.plants.forEach(p => selectedMap.set(p.code, p));
      }
    });
    let selected = [];
    selectedMap.forEach(v => selected.push(v));
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
          ctrl = FieldHerbsPlantComponent.CreateFormGroup(this.fb);
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

}
