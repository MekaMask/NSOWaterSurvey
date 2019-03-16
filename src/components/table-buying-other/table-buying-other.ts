import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the TableBuyingOtherComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'table-buying-other',
  templateUrl: 'table-buying-other.html'
})
export class TableBuyingOtherComponent {

  @Input("headline") private text: string;
  @Input() public FormItem: FormGroup;
  @Input() public size: string;

  private submitRequested: boolean;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    console.log('Hello TableBuyingOtherComponent Component');
    this.text = '';
    this.size = 'ลิตร';

    this.FormItem = TableBuyingOtherComponent.CreateFormGroup(fb);

  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'name': [null, Validators.required],
      'size': [null, Validators.required],
      'drink': [null, Validators.required],
      'agriculture': [null, Validators.required],
      'factory': [null, Validators.required],
      'service': [null, Validators.required],
    });
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgTableBuyingOtherPage", { FormItem: this.FormItem, headline: this.text, size: this.size });
    modal.onDidDismiss(data => {
      if (data) {
        var fg = <FormGroup>data;
        this.FormItem.setValue(fg.value);
      }
    });
    modal.present();
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
