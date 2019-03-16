import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

/**
 * Generated class for the DisasterWarningMethodsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'disaster-warning-methods',
  templateUrl: 'disaster-warning-methods.html'
})
export class DisasterWarningMethodsComponent {
  @Input() public FormItem: FormGroup;
  text: string;
  private submitRequested: boolean;

  constructor(private fb: FormBuilder) {
    console.log('Hello DisasterWarningMethodsComponent Component');
    this.text = 'Hello World';

    this.FormItem = DisasterWarningMethodsComponent.CreateFormGroup(fb);
  }
  
  submitRequest() {
    this.submitRequested = true;
  }


  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'governmentProcess': [false, Validators.required],
      'communityPlan': [false, Validators.required],
      'consultingService': [false, Validators.required],
      'hasOther': [false, Validators.required],
      'other': [null, Validators.required],
    }, {
        validator: DisasterWarningMethodsComponent.checkAnyOrOther()
      });
  }


  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const governmentProcess = c.get('governmentProcess');
      const communityPlan = c.get('communityPlan');
      const consultingService = c.get('consultingService');
      const hasOther = c.get('hasOther');
      const other = c.get('other');

      if (!governmentProcess.value && !communityPlan.value && !consultingService.value && !hasOther.value) {
        return { 'anycheck': true };
      } else if (hasOther.value == true && (!other.value || other.value.trim() == '')) {
        return { 'other': true };
      }
      return null;
    }
  }


  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'anycheck') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.touched || this.submitRequested);
    }
    else if (name == 'other') {
      return this.FormItem.errors && this.FormItem.errors.other && (ctrl.touched || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
