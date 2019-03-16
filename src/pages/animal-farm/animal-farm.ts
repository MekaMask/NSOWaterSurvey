import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TableCheckItemCountComponent } from '../../components/table-check-item-count/table-check-item-count';
import { WaterSources9Component } from '../../components/water-sources9/water-sources9';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-animal-farm',
  templateUrl: 'animal-farm.html',
})
export class AnimalFarmPage {

  @ViewChildren(TableCheckItemCountComponent) private tableCheckItemCount: TableCheckItemCountComponent[];
  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];
 
  private submitRequested: boolean;
  public f: FormGroup;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture.animalFarm));

  constructor(public navCtrl: NavController,private store: Store<HouseHoldState>, public navParams: NavParams, public alertCtrl: AlertController, public fb: FormBuilder) {
    this.f = this.fb.group({
      "doing": [null, Validators.required],
      'cow': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'buffalo': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'pig': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'goat': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'sheep': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'chicken': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'duck': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'goose':TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'silkWool': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'other': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'otherName': [null, Validators.required],
      'waterSources' : WaterSources9Component.CreateFormGroup(this.fb)
    });

  }
    
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalFarmPage');
    this.formData$.subscribe(data => this.f.setValue(data));

  }

  ionViewDidEnter() {

  }
  public handleSubmit() {
    this.submitRequested = true;
    this.tableCheckItemCount.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());

  }

  public isValid(name: string) : boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

    
  
}    