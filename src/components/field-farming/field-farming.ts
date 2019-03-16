import { Input, Component, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { combineLatest } from 'rxjs/operators';
import { FieldAreaComponent } from '../field-area/field-area';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { FieldRiceHarvestComponent } from '../field-rice-harvest/field-rice-harvest';
import { LocationComponent } from '../location/location';
import { WaterSources8AComponent } from '../water-sources8-a/water-sources8-a';

/**
 * Generated class for the FieldFarmingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'field-farming',
  templateUrl: 'field-farming.html'
})
export class FieldFarmingComponent implements ISubmitRequestable {

  @Input() public FormItem: FormGroup;
  @Input('no') public fieldNo: string;

  @ViewChildren(FieldAreaComponent) private fieldAreas: FieldAreaComponent[];
  @ViewChildren(FieldRiceHarvestComponent) private riceHarvests: FieldRiceHarvestComponent[];
  @ViewChildren(LocationComponent) private locationT: LocationComponent[];
  @ViewChildren(WaterSources8AComponent) private waterSources8A: WaterSources8AComponent[];
  private submitRequested: boolean;

  constructor(public fb: FormBuilder) {
    console.log('Hello FieldFarmingComponent Component');

    this.FormItem = FieldFarmingComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    var fg = fb.group({
      'location': LocationComponent.CreateFormGroup(fb),
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'plantingCount': [null, [Validators.required, Validators.min(1), Validators.max(4)]],
      'plantingArea': [null, Validators.required],
      'areaUsed': fb.array([]),
      'harvests': fb.array([]),
      'irrigationField': [null, Validators.required],
      'waterSources': WaterSources8AComponent.CreateFormGroup(fb)
    });
    FieldFarmingComponent.setupPlantingAreaChanges(fb, fg);
    FieldFarmingComponent.setupPlantingCountChanges(fb, fg);
    return fg
  }

  submitRequest() {
    this.submitRequested = true;
    this.fieldAreas.forEach(it => it.submitRequest());
    this.riceHarvests.forEach(it => it.submitRequest());
    this.locationT.forEach(it => it.submitRequest());
    this.waterSources8A.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }


  private static setupPlantingAreaChanges(fb: FormBuilder, fg: FormGroup) {
    const areaUsed: string = "areaUsed";
    const areaCount: string = "plantingCount";
    const areaOption: string = "plantingArea";

    var onPlantingAreaChanges = () => {
      var fields = (fg.get(areaUsed) as FormArray).controls || [];
      var fieldCount = fg.get(areaCount).value || 0;
      var farr = fb.array([]);

      fieldCount = Math.max(1, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fields.length) {
          const fld = fields[i];
          ctrl = fld;
        } else {
          ctrl = FieldAreaComponent.CreateFormGroup(fb);
        }

        farr.push(ctrl);
      }
      fg.setControl(areaUsed, farr);
    };

    const areaCountCtrl = fg.get(areaCount);
    fg.get(areaOption).valueChanges.pipe(
      combineLatest(areaCountCtrl.valueChanges)
    ).subscribe(it => onPlantingAreaChanges());

    onPlantingAreaChanges();
  }

  private static setupPlantingCountChanges(fb: FormBuilder, fg: FormGroup) {
    const componentFormArray: string = "harvests";
    const componentCount: string = "plantingCount";

    var onComponentCountChanges = () => {
      var fields = (fg.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = fg.get(componentCount).value || 0;
      var farr = fb.array([]);

      fieldCount = Math.max(1, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fields.length) {
          const fld = fields[i];
          ctrl = fld;
        } else {
          ctrl = FieldRiceHarvestComponent.CreateFormGroup(fb);
        }

        farr.push(ctrl);
      }
      fg.setControl(componentFormArray, farr);
    };

    fg.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

}
