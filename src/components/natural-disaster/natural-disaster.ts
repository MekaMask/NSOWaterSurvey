import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

/**
 * Generated class for the NaturalDisasterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'natural-disaster',
  templateUrl: 'natural-disaster.html'
})
export class NaturalDisasterComponent {
  @Input() public FormItem: FormGroup;
 
  private submitRequested: boolean;


  constructor(private fb: FormBuilder) {
    console.log('Hello NaturalDisasterComponent Component');

    this.FormItem = NaturalDisasterComponent.CreateFormGroup(fb);
    
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'tsunami': [false, Validators.required],
      'landSlide': [false, Validators.required],
      'earthquake': [false, Validators.required],
      'cyclone': [false, Validators.required],
      'forestFire': [false, Validators.required],
      'drought': [false, Validators.required],
      'cold': [false, Validators.required],
      'epidemic': [false, Validators.required],
      'pest': [false, Validators.required],
      'epizootics': [false, Validators.required],

    }, {
        validator: NaturalDisasterComponent.checkAnyOrOther()
      });
  }


  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const tsunami = c.get('tsunami');
      const landSlide = c.get('landSlide');
      const earthquake = c.get('earthquake');
      const cyclone = c.get('cyclone');
      const forestFire = c.get('forestFire');
      const drought = c.get('drought');
      const cold = c.get('cold');
      const epidemic = c.get('epidemic');
      const pest = c.get('pest');
      const epizootics = c.get('epizootics');


      if (!tsunami.value && !landSlide.value && !earthquake.value && !cyclone.value && !drought.value &&
        !cold.value && !epidemic.value && !pest.value && !forestFire.value && !epizootics.value) {
        return { 'anycheck': true };
      }

      return null;
    }
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
}
