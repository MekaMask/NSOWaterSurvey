import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PumpComponent } from '../../components/pump/pump';
import { WaterActivity6Component } from '../../components/water-activity6/water-activity6';
import { WaterProblem4Component } from '../../components/water-problem4/water-problem4';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-river',
  templateUrl: 'river.html',
})
export class RiverPage {

  private submitRequested: boolean;
  f: FormGroup;
  @ViewChildren(PumpComponent) private pump: PumpComponent[];
  @ViewChildren(WaterActivity6Component) private waterActivity6: WaterActivity6Component[];
  @ViewChildren(WaterProblem4Component) private waterProblem4: WaterProblem4Component[];
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage.river));

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.f = this.fb.group({
      "hasPump": [null, Validators.required],
      "pumpCount":[ null ,Validators.required],
      "pumps": this.fb.array([]),
      "waterActivities": WaterActivity6Component.CreateFormGroup(fb),
      "qualityProblem": this.fb.group({
        "hasProblem": [null, Validators.required],
        "problem": WaterProblem4Component.CreateFormGroup(this.fb)
      })
    });
    this.setupPumpCountChanges()
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.f.setValue(data));
  }

  ionViewDidEnter() {

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.pump.forEach(it => it.submitRequest());
    this.waterActivity6.forEach(it => it.submitRequest());
    this.waterProblem4.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupPumpCountChanges() {
    const componentFormArray: string = "pumps";
    const componentCount: string = "pumpCount";
    var onComponentCountChanges = () => 
    {
      var pump = (this.f.get(componentFormArray) as FormArray).controls || [];
      var pumpCount = this.f.get(componentCount).value || 0;
      var p = this.fb.array([]);
      pumpCount = Math.max(0, pumpCount);
      for (let i = 0; i < pumpCount; i++) 
      {
        var ctrl = null;
        if (i < pump.length) 
        {
          const fld = pump[i];
          ctrl = fld;
        } else 
        {
          ctrl = PumpComponent.CreateFormGroup(this.fb);
        }
        p.push(ctrl);
      }
      this.f.setControl(componentFormArray, p);
    };
    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());
    onComponentCountChanges();
  }
}
