import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TableCheckItemCountComponent } from '../../components/table-check-item-count/table-check-item-count';
import { WaterSources8BComponent } from '../../components/water-sources8-b/water-sources8-b';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetCommercialServiceType, SetWaterSources } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-Commercial',
  templateUrl: 'Commercial.html',
})
export class CommercialPage {

  @ViewChildren(TableCheckItemCountComponent) private tableCheckItemCount: TableCheckItemCountComponent[];
  @ViewChildren(WaterSources8BComponent) private waterSources8B: WaterSources8BComponent[];
  private f: FormGroup;
  private submitRequested: boolean;

  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.commerce));


  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>, public navParams: NavParams, public alertCtrl: AlertController, private fb: FormBuilder) {
    this.f = this.fb.group({
      'name': [null, Validators.required],
      'serviceType': [null, Validators.required],
      'buildingCode': [null, Validators.required],
      'questionForAcademy': this.fb.group({
        'preSchool': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'kindergarten': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'primarySchool': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'highSchool': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'vocational': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'higherEducation': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'personnelCount': [null, Validators.required],
      }),
      'hotelsAndResorts': this.fb.group({
        'roomCount': [null, Validators.required],
        'personnelCount': [null, Validators.required],
      }),
      'hospital': this.fb.group({
        'bedCount': [null, Validators.required],
        'personnelCount': [null, Validators.required],
      }),
      'building': this.fb.group({
        'roomCount': [null, Validators.required],
        'occupiedRoomCount': [null, Validators.required],
        'personnelCount': [null, Validators.required],
      }),
      'religious': this.fb.group({
        'peopleCount': [null, Validators.required],
      }),
      'otherBuilding': this.fb.group({
        'personnelCount': [null, Validators.required],
      }),
      'waterSources': WaterSources8BComponent.CreateFormGroup(this.fb),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommercialPage');
    this.formData$.subscribe(data => this.f.setValue(data));

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.tableCheckItemCount.forEach(it => it.submitRequest());
    this.waterSources8B.forEach(it => it.submitRequest());
    this.store.dispatch(new SetCommercialServiceType(this.f.get('serviceType').value));
    this.store.dispatch(new SetWaterSources(this.f.get('waterSources').value));
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
