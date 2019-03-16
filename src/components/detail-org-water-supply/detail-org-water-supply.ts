import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

/**
 * Generated class for the DetailOrgWaterSupplyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detail-org-water-supply',
  templateUrl: 'detail-org-water-supply.html'
})
export class DetailOrgWaterSupplyComponent implements ISubmitRequestable {

  @Input() public FormItem: FormGroup;
  @Input('no') public no: string;
  private submitRequested: boolean;


  constructor(public fb: FormBuilder) {
    console.log('Hello DetailOrgWaterSupplyComponent Component');
    this.FormItem = DetailOrgWaterSupplyComponent.CreateFormGroup(fb);

  }


  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'name': [null, Validators.required],
      'hasSurfaceWater': [null, Validators.required],
      'surfaceWaterPerMonth': [null, Validators.required],
      'useGroundWater': [null, Validators.required],
      'groundWaterCount': [null, Validators.required],
      'groundWaterUsePerMonth': [null, Validators.required],
      'plumbingPrice': [null, Validators.required],
      'meterRentalFee': [null, Validators.required],
      'disinfection': [null, Validators.required],
      'otherDisinfection': [null, Validators.required],
    });

  }


  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
  submitRequest() {
    this.submitRequested = true;
  }




}
