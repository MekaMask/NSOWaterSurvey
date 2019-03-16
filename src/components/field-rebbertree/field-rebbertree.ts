import { Component, Input, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationComponent } from '../location/location';
import { FieldAreaComponent } from '../field-area/field-area';
import { WaterSources9Component } from '../water-sources9/water-sources9';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

/**
 * Generated class for the FieldRebbertreeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'field-rebbertree',
  templateUrl: 'field-rebbertree.html'
})
export class FieldRebbertreeComponent implements ISubmitRequestable {


  @Input() public FormItem: FormGroup;
  @Input('no') text :string;
  private submitRequested: boolean;
  @ViewChildren(LocationComponent) private locationT: LocationComponent[];
  @ViewChildren(FieldAreaComponent) private fieldArea: FieldAreaComponent[];
  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];

  constructor(public fb: FormBuilder) {
    console.log('Hello FieldRebbertreeComponent Component');
    this.FormItem = FieldRebbertreeComponent.CreateFormGroup(this.fb);

  }
  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'location': LocationComponent.CreateFormGroup(fb),
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'irrigationField': ['', Validators.required],
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    })
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
  submitRequest() {
    this.locationT.forEach(it => it.submitRequest());
    this.fieldArea.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
    this.submitRequested = true;

  }

}
