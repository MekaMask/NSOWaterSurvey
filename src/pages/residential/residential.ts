import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WaterSources8BComponent } from '../../components/water-sources8-b/water-sources8-b';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetresidentialGardeningUse } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-residential',
  templateUrl: 'residential.html',
})
export class ResidentialPage {

  @ViewChildren(WaterSources8BComponent) private waterSources8B: WaterSources8BComponent[];
  residentialFrm: FormGroup;
  private submitRequested: boolean;
  
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.residence));

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.residentialFrm = this.fb.group({
      'memberCount': [null, Validators.required],
      'workingAge': [null, Validators.required],
      'waterSources' : WaterSources8BComponent.CreateFormGroup(this.fb),
      'gardeningUse': [null, Validators.required],
    });
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.residentialFrm.setValue(data));
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.waterSources8B.forEach(it => it.submitRequest());
    this.store.dispatch(new SetresidentialGardeningUse(this.residentialFrm.get('gardeningUse').value));
  }

  public isValid(name: string): boolean {
    var ctrl = this.residentialFrm.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
