import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FieldAreaComponent } from '../field-area/field-area';
import { LocationComponent } from '../location/location';
import { WaterSources9Component } from '../water-sources9/water-sources9';

/**
 * Generated class for the FieldMushroomComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'field-mushroom',
  templateUrl: 'field-mushroom.html'
})
export class FieldMushroomComponent {

  @Input() public FormItem: FormGroup;
  @Input('no') public no: string;

  private submitRequested: boolean;

  @ViewChildren(LocationComponent) private locationT: LocationComponent[];
  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];


  constructor(public fb: FormBuilder) {

    this.FormItem = FieldMushroomComponent.CreateFormGroup(this.fb);

  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'location': LocationComponent.CreateFormGroup(fb),
      'areaSqM': [null, Validators.required],
      'irrigationField': [null, Validators.required],
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    });
  }

  submitRequest() {
    this.submitRequested = true;
    this.locationT.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
