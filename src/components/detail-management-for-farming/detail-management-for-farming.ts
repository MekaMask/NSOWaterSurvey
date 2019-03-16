import { Component, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FieldAreaComponent } from '../field-area/field-area';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

/**
 * Generated class for the DetailManagementForFarmingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detail-management-for-farming',
  templateUrl: 'detail-management-for-farming.html'
})
export class DetailManagementForFarmingComponent implements ISubmitRequestable{

  @Input() public FormItem: FormGroup;
  @Input('no') public fieldNo: string;

  private submitRequested: boolean;
  constructor(public fb: FormBuilder) {
    this.FormItem = DetailManagementForFarmingComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'name': [null, Validators.required],
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'memberCount': [null, Validators.required],
      'avgSurfaceWaterUse': [null, Validators.required],
      'groundWaterCount': [null, Validators.required],
      'avgGroundWaterUse': [null, Validators.required],
    });
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
