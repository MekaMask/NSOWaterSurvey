import { FieldAreaComponent } from './../field-area/field-area';
import { LocationComponent } from './../location/location';
import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WaterSources9Component } from '../water-sources9/water-sources9';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { ModalController } from 'ionic-angular';
import { EX_TREEDOK_LIST } from '../../models/tree';
import { ModalPlantComponent } from '../modal-plant/modal-plant';
import { NavParams } from 'ionic-angular/navigation/nav-params';

/**
 * Generated class for the FieldFlowerCropComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'field-flower-crop',
  templateUrl: 'field-flower-crop.html'
})
export class FieldFlowerCropComponent implements ISubmitRequestable {

  @Input('no') text: string;
  @Input() forwardListPlant: any[];
  @Input() public FormItem: FormGroup;
  @ViewChildren(LocationComponent) private locationT: LocationComponent[];
  @ViewChildren(ModalPlantComponent) private modalPlant: FieldAreaComponent[];
  @ViewChildren(FieldAreaComponent) private fieldArea: FieldAreaComponent[];
  @ViewChildren(WaterSources9Component) private waterSource9: WaterSources9Component[];
  private submitRequested: boolean;
  shownData = EX_TREEDOK_LIST;
  constructor(public fb: FormBuilder, public modalCtrl: ModalController) {
    console.log('Hello FieldFlowerCropComponent Component');
    this.text = 'Hello World';

    this.FormItem = FieldFlowerCropComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'location': LocationComponent.CreateFormGroup(fb),
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'irrigationField': [null, Validators.required],
      'plantings': ModalPlantComponent.CreateFormGroup(fb),
      'otherPlantings': ModalPlantComponent.CreateFormGroup(fb),
      'thisPlantOnly': [null, Validators.required],
      'primaryPlant': [null, Validators.required],
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    })
  }

  submitRequest() {
    this.submitRequested = true;
    this.locationT.forEach(it => it.submitRequest());
    this.fieldArea.forEach(it => it.submitRequest());
    this.modalPlant.forEach(it => it.submitRequest());
    this.waterSource9.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
