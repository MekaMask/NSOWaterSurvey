import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { WaterSources9Component } from '../water-sources9/water-sources9';

/**
 * Generated class for the FrogFarmingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'frog-farming',
  templateUrl: 'frog-farming.html'
})
export class FrogFarmingComponent {

  @Input() public FormItem: FormGroup;
  @Input('headline') text: string;
  private submitRequested: boolean;
  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];

  constructor(public fb: FormBuilder) {
    console.log('Hello FrogFarmingComponent Component');
    this.text = 'Hello World';

    this.FormItem = FrogFarmingComponent.CreateFormGroup(fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      "doing": [null, Validators.required],
      "depression": [false, Validators.required],
      "stew": [false, Validators.required],
      "other": [null , Validators.required],
      'hasOther': [false, Validators.required],
      "animalsCount": [null, Validators.required],
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    }, {
        validator: FrogFarmingComponent.checkAnyOrOther()
      });
  }

  submitRequest() {
    this.submitRequested = true;
    this.waterSources9.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'anycheck') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.touched || this.submitRequested);
    } else if (name == 'other') {
      return this.FormItem.errors && this.FormItem.errors.other && (ctrl.touched || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const depression = c.get('depression');
      const stew = c.get('stew');
      const other = c.get('other');
      const hasOther = c.get('hasOther');


      if (!depression.value && !stew.value) {
        return { 'anycheck': true };
      } else if (hasOther.value == true && (!other.value || other.value.trim() == '')) {
        return { 'other': true };
      }
      return null;
    }
  }
}
