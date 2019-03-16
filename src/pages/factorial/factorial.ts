import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WaterSources8BComponent } from '../../components/water-sources8-b/water-sources8-b';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetFactorialCategory, SetWaterSources } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-factorial',
  templateUrl: 'factorial.html',
})
export class FactorialPage {
  @ViewChildren(WaterSources8BComponent) private waterSources8B: WaterSources8BComponent[];


  private submitRequested: boolean;
  FactoryForm: FormGroup;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.factory));
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder,private store: Store<HouseHoldState>) {
    this.FactoryForm = this.fb.group({
      'name': ['', Validators.required],
      'category': ['', Validators.required],
      'workersCount': ['', Validators.required],
      'heavyMachine': ['', Validators.required],
      'waterSources': WaterSources8BComponent.CreateFormGroup(this.fb),
      'hasWasteWaterFromProduction': ['', Validators.required],
      'hasWasteWaterTreatment': ['', Validators.required],
      'wasteWaterReuse': ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.FactoryForm.setValue(data));
    console.log('ionViewDidLoad FactorialPage');
  }
  ionViewDidEnter() {

  }
  public handleSubmit() {
    this.submitRequested = true;
    this.waterSources8B.forEach(it => it.submitRequest());
    this.store.dispatch(new SetFactorialCategory(this.FactoryForm.get('category').value));
    this.store.dispatch(new SetWaterSources(this.FactoryForm.get('waterSources').value));
  }

  public isValid(name: string): boolean {
    var ctrl = this.FactoryForm.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
