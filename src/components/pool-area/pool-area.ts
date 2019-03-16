import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { FieldAreaComponent } from '../field-area/field-area';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

/**
 * Generated class for the PoolAreaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pool-area',
  templateUrl: 'pool-area.html'
})
export class PoolAreaComponent implements ISubmitRequestable {

  @Input("headline") private text: string;
  @Input("pool") private poolText: string;
  @Input('no') no: string;
  @Input() public FormItem: FormGroup;
  @ViewChildren(FieldAreaComponent) private fieldArea: FieldAreaComponent[];
  private submitRequested: boolean;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    console.log('Hello PoolAreaComponent Component');
    this.text = '';
    this.poolText = "บ่อหรือร่องสวน";

    // TODO: Remove this
    this.FormItem = PoolAreaComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'shape': [null, Validators.required],
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'depth': [null, Validators.required],
      'rectangle': fb.group({
        'width': [null, Validators.required],
        'length': [null, Validators.required],
      }),
      'diameter': [null, Validators.required]
    });
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgPoolAreaPage", { FormItem: this.FormItem, headline: this.text });
    modal.onDidDismiss(data => {
      if (data) {
        var fg = <FormGroup>data;
        this.FormItem.get('rectangle').setValue(fg.value);
      }
    });
    modal.present();
  }

  submitRequest() {
    this.submitRequested = true;
    this.fieldArea.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
