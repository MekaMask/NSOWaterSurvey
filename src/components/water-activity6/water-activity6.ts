import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the WaterActivity6Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'water-activity6',
  templateUrl: 'water-activity6.html'

})
export class WaterActivity6Component {
  private submitRequested: boolean;
  @Input('headline') public text: string;
  @Input('headline2') public text2: string;
  @Input() public FormItem: FormGroup;

  constructor(private fb: FormBuilder) {
    console.log('Hello WaterActivity6Component Component');
    this.text = 'Hello World';
    this.FormItem = WaterActivity6Component.CreateFormGroup(fb);
  }

  submitRequest() {
    this.submitRequested = true;
  }
  
  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'drink': [null, Validators.required],
      'plant': [null, Validators.required],
      'farm': [null, Validators.required],
      'agriculture': [null, Validators.required],
      'product': [null, Validators.required],
      'service': [null, Validators.required]
    });
  }

}
