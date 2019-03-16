import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { PumpComponent } from '../pump/pump';
import { WaterActivity6Component } from '../water-activity6/water-activity6';
import { WaterProblem4Component } from '../water-problem4/water-problem4';

/**
 * Generated class for the PoolUsageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pool-usage',
  templateUrl: 'pool-usage.html'
})
export class PoolUsageComponent implements ISubmitRequestable {

  @Input() public FormItem: FormGroup;
  @Input("headline") public text: string;
  @Input('no') no: string;

  private submitRequested: boolean;
  @ViewChildren(PumpComponent) private pump: PumpComponent[];
  @ViewChildren(WaterActivity6Component) private waterActivity6: WaterActivity6Component[];
  @ViewChildren(WaterProblem4Component) private waterProblem4: WaterProblem4Component[];

  constructor(public fb: FormBuilder) {
    console.log('Hello PoolUsageComponent Component');
    this.text = '1';
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    var fg = fb.group({
      'hasCubicMeterPerMonth': [null, Validators.required],
      'cubicMeterPerMonth': [null, Validators.required],
      'hasPump': [null, Validators.required],
      'pumpCount': [null, Validators.required],
      'pumps': fb.array([]),
      'waterActivities': WaterActivity6Component.CreateFormGroup(fb),
      'qualityProblem': fb.group({
        "hasProblem": [null, Validators.required],
        "problem": WaterProblem4Component.CreateFormGroup(fb)
      })
    });
    PoolUsageComponent.setupPumpCountChanges(fb, fg);
    return fg;
  }

  submitRequest() {
    this.submitRequested = true;
    this.pump.forEach(it => it.submitRequest());
    this.waterProblem4.forEach(it => it.submitRequest());
    this.waterActivity6.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private static setupPumpCountChanges(fb: FormBuilder, fg: FormGroup) {
    const componentFormArray: string = "pumps";
    const componentCount: string = "pumpCount";

    var onComponentCountChanges = () => {
      var pump = (fg.get(componentFormArray) as FormArray).controls || [];
      var pumpCount = fg.get(componentCount).value || 0;
      var p = fb.array([]);

      pumpCount = Math.max(0, pumpCount);

      for (let i = 0; i < pumpCount; i++) {
        var ctrl = null;
        if (i < pump.length) {
          const fld = pump[i];
          ctrl = fld;
        } else {
          ctrl = PumpComponent.CreateFormGroup(fb);
        }

        p.push(ctrl);
      }
      fg.setControl(componentFormArray, p);
    };

    fg.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

}
