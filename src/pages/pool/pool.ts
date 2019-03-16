import { Component,  ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PoolAreaComponent } from '../../components/pool-area/pool-area';
import { PoolUsageComponent } from '../../components/pool-usage/pool-usage';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-pool',
  templateUrl: 'pool.html',
})
export class PoolPage {

  public f: FormGroup;
  @ViewChildren(PoolAreaComponent) private poolArea: PoolAreaComponent[];
  @ViewChildren(PoolUsageComponent) private poolUsage: PoolUsageComponent[];
  private submitRequested: boolean;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage.pool));

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.f = this.fb.group({
      'doing': [null, Validators.required],
      'poolCount': [null, Validators.required],
      'hasSameSize': [null, Validators.required],
      'poolSizes': this.fb.array([]),
      'waterResourceCount': [null, Validators.required],
      'waterResources': this.fb.array([]),
    });
    this.setupPoolCountChanges();
    this.setupPoolCountUsageChanges();
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.f.setValue(data));
    // console.log('ionViewDidLoad PoolPage'+this.formData$);
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.poolUsage.forEach(it => it.submitRequest());
    this.poolArea.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupPoolCountChanges() {
    const componentFormArray: string = "poolSizes";
    const componentCount: string = "poolCount";

    var onComponentCountChanges = () => {
      var poolSizes = (this.f.get(componentFormArray) as FormArray).controls || [];
      var poolCount = this.f.get(componentCount).value || 0;
      var pool = this.fb.array([]);

      poolCount = Math.max(0, poolCount);

      for (let i = 0; i < poolCount; i++) {
        var ctrl = null;
        if (i < poolSizes.length) {
          const fld = poolSizes[i];
          ctrl = fld;
        } else {
          ctrl = PoolAreaComponent.CreateFormGroup(this.fb);
        }
        pool.push(ctrl);
      }
      this.f.setControl(componentFormArray, pool);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

  private setupPoolCountUsageChanges() {
    const componentFormArray: string = "waterResources";
    const componentCount: string = "waterResourceCount";

    var onComponentCountChanges = () =>
    {
      var poolUsage = (this.f.get(componentFormArray) as FormArray).controls || [];
      var poolCountUsage = this.f.get(componentCount).value || 0;
      var pool = this.fb.array([]);
      poolCountUsage = Math.max(0, poolCountUsage);
      for (let i = 0; i < poolCountUsage; i++)
      {
        var ctrl = null;
        if (i < poolUsage.length)
        {
          const fld = poolUsage[i];
          ctrl = fld;
        } else
        {
          ctrl = PoolUsageComponent.CreateFormGroup(this.fb);
        }
        pool.push(ctrl);
      }
      this.f.setControl(componentFormArray, pool);
    };
    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());
    onComponentCountChanges();
  }
}
