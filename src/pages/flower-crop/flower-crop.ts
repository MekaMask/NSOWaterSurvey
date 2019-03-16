import { FieldFlowerCropComponent } from './../../components/field-flower-crop/field-flower-crop';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { EX_TREEDOK_LIST } from '../../models/tree';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getPerennialPlantSelectPlant, getAgronomyPlantSelectPlant, getRicePlantSelectPlant, getRubberTreeSelectPlant } from '../../states/household';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-flower-crop',
  templateUrl: 'flower-crop.html',
})
export class FlowerCropPage {

  
  @ViewChildren(FieldFlowerCropComponent) private fieldFlowerCrop: FieldFlowerCropComponent[];
  private submitRequested: boolean;
  flowerCropFrm: FormGroup;
  shownData: string[];

  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture.flowerCrop));
  private GetPlantDrycrop$ = this.store.select(getAgronomyPlantSelectPlant);
  private GetPlantPerennial$ = this.store.select(getPerennialPlantSelectPlant);
  private GetPlantRice$ = this.store.select(getRicePlantSelectPlant);
  private GetPlantRubber$ = this.store.select(getRubberTreeSelectPlant);
  listDryCropData: any = [];
  listPerenialData: any = [];
  listRiceData: any = [];
  listRubberData: any = [];
  listSumData: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public modalCtrl: ModalController, private store: Store<HouseHoldState>) {
    this.flowerCropFrm = this.fb.group({
      'doing': [null, Validators.required],
      'fieldCount': [null, Validators.required],
      'fields': fb.array([
        FieldFlowerCropComponent.CreateFormGroup(fb)]),
      "_id": [null],
    });
    this.setupFieldCountChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowerCropPage');
    this.formData$.subscribe(data => this.flowerCropFrm.setValue(data));
    this.GetPlantRice$.subscribe(data => this.listRiceData = data);
    this.GetPlantDrycrop$.subscribe(data => this.listDryCropData = data);
    this.GetPlantRubber$.subscribe(data => this.listRubberData = data);
    this.GetPlantPerennial$.subscribe(data => this.listPerenialData = data);
    var sum = this.listDryCropData.concat(this.listPerenialData).concat(this.listRiceData).concat(this.listRubberData)
    this.listSumData = sum;
    console.log('listSumData');
    console.log(this.listSumData);
  }

  model() {
    const modal = this.modalCtrl.create("SearchDropdownPage",
      { title: "ไม้ดอก ไม้ประดับ การเพาะพันธุ์ไม้", selected: [], list: EX_TREEDOK_LIST, limit: 5 });

    modal.onDidDismiss(data => {
      if (data) {
        // this.FormItem = data;
        // var fg = <FormGroup>data;
        // this.FormItem.setValue(fg.value);

        var adata = data as Array<string>;
        this.shownData = adata.map(it => it.split(".")[1]);
      }
    });

    modal.present();
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldFlowerCrop.forEach(it => it.submitRequest());
    console.log(this.flowerCropFrm.value);
    let fields = this.flowerCropFrm.get('fields').value as Array<any>;
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
    var ctrl = this.flowerCropFrm.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupFieldCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fieldFlowerCrop = (this.flowerCropFrm.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.flowerCropFrm.get(componentCount).value || 0;
      var field = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fieldFlowerCrop.length) {
          const fld = fieldFlowerCrop[i];
          ctrl = fld;
        } else {
          ctrl = FieldFlowerCropComponent.CreateFormGroup(this.fb);
        }

        field.push(ctrl);
      }
      this.flowerCropFrm.setControl(componentFormArray, field);
    };

    this.flowerCropFrm.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
