import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UnitButtonComponent } from '../../components/unit-button/unit-button';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-dlg-unit',
  templateUrl: 'dlg-unit.html',
})
export class DlgUnitPage {
  private submitRequested: boolean;
  public FormItem: FormGroup;

  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s));

  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>, public navParams: NavParams, private viewCtrl: ViewController, public fb: FormBuilder) {
    this.FormItem = UnitButtonComponent.CreateFormGroup(this.fb);
    const datain = navParams.get('FormItem') as FormGroup;
    this.FormItem.setValue(datain.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgUnitPage');
    this.formData$.subscribe(data => this.FormItem.setValue(data));

  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.submitRequested = true;
    if (this.FormItem.get('subUnit.roomNumber').valid && this.FormItem.get('subUnit.access').valid) {
      this.viewCtrl.dismiss(this.FormItem);
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
