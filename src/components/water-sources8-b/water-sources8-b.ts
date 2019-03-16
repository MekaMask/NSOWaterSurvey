import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

/**
 * Generated class for the WaterSources8BComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'water-sources8-b',
  templateUrl: 'water-sources8-b.html'
})
export class WaterSources8BComponent{

  @Input('headline') public text: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(private fb: FormBuilder) {
    console.log('Hello WaterSources8BComponent Component');
    this.text = '';

    // TODO: Remove this
    // this.FormItem = this.fb.group({
    //   'hasOther': [false,Validators.required],
    //   'other': ['',Validators.required]
    // });
    this.FormItem = WaterSources8BComponent.CreateFormGroup(fb);
  }
  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'plumbing' : [false,Validators.required],
      'underGround': [false, Validators.required],
      'pool': [false, Validators.required],
      'river': [false, Validators.required],
      'irrigation': [false, Validators.required],
      'rain': [false, Validators.required],
      'buying': [false, Validators.required],
      'rainingAsIs': [false, Validators.required],
      'other': ['', Validators.required],
      'hasOther' : [false,Validators.required]
    }, {
      validator: WaterSources8BComponent.checkAnyOrOther()
    });
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

  submitRequest() {
    this.submitRequested = true;
  }
  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const plumbing = c.get('plumbing');
      const underGround = c.get('underGround');
      const pool = c.get('pool');
      const river = c.get('river');
      const other = c.get('other');
      const hasOther = c.get('hasOther');
      const irrigation = c.get('irrigation');
      const rain = c.get('rain');
      const buying = c.get('buying');
     

      if (!plumbing.value && !underGround.value && !pool.value && !river.value && !hasOther.value && !irrigation.value
        && !rain.value && !buying.value ) {
        return { 'anycheck': true };
      } else if (hasOther.value == true && (!other.value || other.value.trim() == '')) {
        return { 'other': true };
      }
      return null;
    }
  }

}
