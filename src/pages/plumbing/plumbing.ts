import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WaterProblem6Component } from '../../components/water-problem6/water-problem6';
import { WaterActivity5Component } from '../../components/water-activity5/water-activity5';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-plumbing',
  templateUrl: 'plumbing.html',
})
export class PlumbingPage {

  @ViewChildren(WaterProblem6Component) private waterProblem6: WaterProblem6Component[];
  @ViewChildren(WaterActivity5Component) private waterActivity5: WaterActivity5Component[];
  public f: FormGroup;
  private submitRequested: boolean;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage.plumbing));


  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.f = this.fb.group({
      'mwa': this.fb.group({
        'doing': [null, Validators.required],
        'qualityProblem': this.fb.group({
          'hasProblem': [null, Validators.required],
          'problem': WaterProblem6Component.CreateFormGroup(fb),
        }),
        'plumbingUsage': this.fb.group({
          'waterQuantity': [null, Validators.required],
          'cubicMeterPerMonth': [null, Validators.required],
          'waterBill': [null, Validators.required]
        })
      }),
      'pwa': this.fb.group({
        'doing': [null, Validators.required],
        'qualityProblem': this.fb.group({
          'hasProblem': [null, Validators.required],
          'problem': WaterProblem6Component.CreateFormGroup(fb),
        }),
        'plumbingUsage': this.fb.group({
          'waterQuantity': [null, Validators.required],
          'cubicMeterPerMonth': [null, Validators.required],
          'waterBill': [null, Validators.required],
        })
      }),
      'other': this.fb.group({
        'doing': [null, Validators.required],
        'qualityProblem': this.fb.group({
          'hasProblem': [null, Validators.required],
          'problem': WaterProblem6Component.CreateFormGroup(fb),
        }),
        'plumbingUsage': this.fb.group({
          'waterQuantity': [null, Validators.required],
          'cubicMeterPerMonth': [null, Validators.required],
          'waterBill': [null, Validators.required],
        })
      }),
      'waterActivityMWA': WaterActivity5Component.CreateFormGroup(this.fb),
      'waterActivityPWA': WaterActivity5Component.CreateFormGroup(this.fb),
      'waterActivityOther': WaterActivity5Component.CreateFormGroup(this.fb),
      'hasWaterNotRunning': [null, Validators.required],
      'waterNotRunningCount': [null, Validators.required]
    });

    // this.PlumbingForm.get('MWA.PlumbingUsage.WaterQuantity').valueChanges.subscribe(x => alert(x));
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.f.setValue(data));
    console.log('ionViewDidLoad PlumbingPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.waterProblem6.forEach(it => it.submitRequest());
    this.waterActivity5.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
