import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Generated class for the WaterProblem4Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'water-problem4',
  templateUrl: 'water-problem4.html'
})
export class WaterProblem4Component {

  @Input("headline") public text: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(private fb: FormBuilder) {
    console.log('Hello WaterProblem4Component Component');
    this.text = 'Hello World';
    this.text = '1';
    this.FormItem = this.fb.group({
      'hasProblem': [null,Validators.required],
      'problem': WaterProblem4Component.CreateFormGroup(this.fb)
    });
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'turbidWater': [false, Validators.required],
      'saltWater': [false, Validators.required],
      'smell': [false, Validators.required],
      'filmOfOil': [false, Validators.required],
      'fogWater': [false, Validators.required],
      'hardWater': [false, Validators.required],
    } ,{
      validator: WaterProblem4Component.checkAnyOrOther()
    });
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'anycheck') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.touched || this.submitRequested);
    } 
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const saltWater = c.get('saltWater');
      const smell = c.get('smell');
      const filmOfOil = c.get('filmOfOil');
      const fogWater = c.get('fogWater');
      

      if (!saltWater.value && !smell.value && !filmOfOil.value && !fogWater.value) {
        return { 'anycheck': true };
      } 
      return null;
    }
  }
}
