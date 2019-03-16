import { Store } from '@ngrx/store';
import { WaterSources9Component } from './../water-sources9/water-sources9';
import { ISubmitRequestable } from './../../shared/ISubmitRequestable';
import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { LocationComponent } from '../location/location';
import { FieldAreaComponent } from '../field-area/field-area';
import { ModalController } from 'ionic-angular';
import { EX_TREERAI_LIST } from '../../models/tree';
import { ModalPlantComponent } from '../modal-plant/modal-plant';
import { HouseHoldState } from '../../states/household/household.reducer';


/**
 * Generated class for the FieldDryCropPlantingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'field-dry-crop-planting',
  templateUrl: 'field-dry-crop-planting.html'
})
export class FieldDryCropPlantingComponent implements ISubmitRequestable {

  @Input() public FormItem: FormGroup;
  @Input('no') text: string;
  private submitRequested: boolean;

  @ViewChildren(LocationComponent) private locationT: LocationComponent[];
  @ViewChildren(FieldAreaComponent) private fieldArea: FieldAreaComponent[];
  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];
  @ViewChildren(ModalPlantComponent) private modalPlant: FieldAreaComponent[];
  DataList = EX_TREERAI_LIST;

  constructor(public fb: FormBuilder, public modalCtrl: ModalController, private store: Store<HouseHoldState>) {
    console.log('Hello FieldDryCropPlantingComponent Component');
    this.text = 'Hello World';

    this.FormItem = FieldDryCropPlantingComponent.CreateFormGroup(this.fb);

  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    var fg = fb.group({
      'location': LocationComponent.CreateFormGroup(fb),
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'irrigationField': [null, Validators.required],
      'plantings': ModalPlantComponent.CreateFormGroup(fb),
      'otherPlantings': ModalPlantComponent.CreateFormGroup(fb),
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    });
    return fg;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  submitRequest() {
    this.submitRequested = true;
    this.locationT.forEach(it => it.submitRequest());
    this.fieldArea.forEach(it => it.submitRequest());
    this.modalPlant.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
    
  }


}
