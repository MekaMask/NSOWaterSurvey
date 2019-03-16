import { Component, Input, ViewChildren } from '@angular/core';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { PoolAreaComponent } from '../pool-area/pool-area';

/**
 * Generated class for the DetailWaterManagementComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detail-water-management',
  templateUrl: 'detail-water-management.html'
})
export class DetailWaterManagementComponent implements ISubmitRequestable {

  @ViewChildren(PoolAreaComponent) private poolArea: PoolAreaComponent[];
  @Input() public FormItem: FormGroup;

  @Input('no') public fieldNo: string;
  private submitRequested: boolean;
  constructor(public fb: FormBuilder) {
    console.log('Hello DetailWaterManagementComponent Component');
    this.FormItem = DetailWaterManagementComponent.CreateFormGroup(fb);

  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'name': [null, Validators.required],
      'useForPlumbing': [false, Validators.required],
      'useForFactory': [false, Validators.required],
      'useForFarming': [false, Validators.required],
      'useForService': [false, Validators.required],
      'useForOther': [false, Validators.required],
      'other': [null, Validators.required],
      'projectArea': PoolAreaComponent.CreateFormGroup(fb),
    },{
      validator: DetailWaterManagementComponent.checkAnyOrOther()
    });
   
  }

  submitRequest() {
    this.submitRequested = true;
    this.poolArea.forEach(it => it.submitRequest());

  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const useForPlumbing = c.get('useForPlumbing');
      const useForFactory = c.get('useForFactory');
      const useForFarming = c.get('useForFarming');
      const useForService = c.get('useForService');
      const useForOther = c.get('useForOther');
      const other = c.get('other');


      if (!useForPlumbing.value && !useForFactory.value && !useForFarming.value && !useForOther.value && !useForService.value) {
        return { 'anycheck': true };
      } else if (useForOther.value == true && (!other.value || other.value.trim() == '')) {
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
    } else if (name == 'other') {
      return this.FormItem.errors && this.FormItem.errors.other && (ctrl.touched || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
