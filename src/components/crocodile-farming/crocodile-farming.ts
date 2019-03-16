import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { PoolAreaComponent } from '../pool-area/pool-area';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { WaterSources9Component } from '../water-sources9/water-sources9';

/**
 * Generated class for the CrocodileFarmingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'crocodile-farming',
  templateUrl: 'crocodile-farming.html'
})
export class CrocodileFarmingComponent implements ISubmitRequestable {

  @Input() public FormItem: FormGroup;
  @Input("headline") public text: string;
  @Input('no') no: string;

  @ViewChildren(PoolAreaComponent) private poolArea: PoolAreaComponent[];

  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];

  private submitRequested: boolean;

  constructor(public fb: FormBuilder) {
    console.log('Hello CrocodileFarmingComponent Component');
    this.text = 'Hello World';

    // this.FormItem = CrocodileFarmingComponent.CreateFormGroup(fb);
  }


  // ngAfterViewInit(): void {
  //   this.setupFieldCountChanges()

  // }


  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    var fg = fb.group({
      "doing": [null, Validators.required],
      "depression": [false, Validators.required],
      "hasOther": [false, Validators.required],
      "other": ['', Validators.required],
      "fieldCount": [null, Validators.required],
      "fieldsAreSameSize": [null, Validators.required],

      "fields": fb.array([]),

      "animalsCount": [null, Validators.required],
      'waterSources': WaterSources9Component.CreateFormGroup(fb)


    }, {
        validator: CrocodileFarmingComponent.checkAnyOrOther()
      }
    );
    CrocodileFarmingComponent.setupFieldCountChanges(fb, fg);
    return fg;
  }

  submitRequest() {
    this.submitRequested = true;
    this.poolArea.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());

  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const depression = c.get('depression');
      const hasOther = c.get('hasOther');

      const other = c.get('other');


      if (!depression.value && !hasOther.value) {
        return { 'anycheck': true };
      } else if (hasOther.value == true && (!other.value || other.value.trim() == '')) {
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


  private static setupFieldCountChanges(fb: FormBuilder, fg: FormGroup) {

    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fields = (fg.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = fg.get(componentCount).value || 0;
      var field = fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fields.length) {
          const fld = fields[i];
          ctrl = fld;
        } else {
          ctrl = PoolAreaComponent.CreateFormGroup(fb);
        }

        field.push(ctrl);
      }
      fg.setControl(componentFormArray, field);
    };

    fg.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }








}
