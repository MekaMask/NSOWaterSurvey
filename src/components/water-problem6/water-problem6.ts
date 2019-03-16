import { WaterActivity6Component } from './../water-activity6/water-activity6';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'water-problem6',
  templateUrl: 'water-problem6.html'
})
export class WaterProblem6Component {

  @Input("headline") public text: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(private fb: FormBuilder) {
    console.log('Hello WaterProblem6Component Component');
    this.text = '1';
    this.FormItem = this.fb.group({
      'hasProblem': [null, Validators.required],
      'problem': WaterProblem6Component.CreateFormGroup(fb),
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
    },{
      validator: WaterProblem6Component.checkAnyOrOther()
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
    // else if (name == 'other') {
    //   return this.FormItem.errors && this.FormItem.errors.other && (ctrl.touched || this.submitRequested);
    // }
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const turbidWater = c.get('turbidWater');
      const saltWater = c.get('saltWater');
      const smell = c.get('smell');
      const filmOfOil = c.get('filmOfOil');
      const fogWater = c.get('fogWater');
      const hardWater = c.get('hardWater');

      if (!turbidWater.value && !saltWater.value && !smell.value && !filmOfOil.value
        && !fogWater.value && !hardWater.value) {
        return { 'anycheck': true };
      } 
      // else if (hasOther.value == true && (!other.value || other.value.trim() == '')) {
      //   return { 'other': true };
      // }
      return null;
    }
  }

  

}
