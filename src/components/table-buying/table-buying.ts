import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the TableBuyingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'table-buying',
  templateUrl: 'table-buying.html'
})
export class TableBuyingComponent {

  @Input("headline") private text: string;
  @Input() public FormItem: FormGroup;
  @Input() public size: string;

  private submitRequested: boolean;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    console.log('Hello TableBuyingComponent Component');
    this.text = '';
    this.size = 'ลิตร';

    this.FormItem = TableBuyingComponent.CreateFormGruop(fb);

  }

  public static CreateFormGruop(fb: FormBuilder): FormGroup {
    return fb.group({
      'name': [ null],
      'size': [ null, Validators.required],
      'drink': [ null, Validators.required],
      'agriculture': [ null, Validators.required],
      'factory': [ null, Validators.required],
      'service': [ null, Validators.required],
    });

  }



  public showModal() {
    const modal = this.modalCtrl.create("DlgTableBuyingPage", { FormItem: this.FormItem, headline: this.text, size: this.size });
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
