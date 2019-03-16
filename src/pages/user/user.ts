import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getFactorialCategory, getCommercialServiceType } from '../../states/household';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  userInfo: FormGroup;
  private submitRequested: boolean;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.closing));
  private factorialCategory$ = this.store.select(getFactorialCategory);
  public facCategory: string;
  private commercialServiceType$ = this.store.select(getCommercialServiceType);
  public commercialServiceType: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.userInfo = this.fb.group({
      "informer": [null, Validators.required],
      "factorialCategoryCode": [null, Validators.required],
      "serviceTypeCode": [null, Validators.required]
    });
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.userInfo.setValue(data));
    this.factorialCategory$.subscribe(data => this.facCategory = data);
    this.commercialServiceType$.subscribe(data => this.commercialServiceType = data);
  }

  ionViewDidEnter() {
  }

  public handleSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.userInfo.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}