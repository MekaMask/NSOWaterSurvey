import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the TableDisasterousComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'table-disasterous',
  templateUrl: 'table-disasterous.html'
})
export class TableDisasterousComponent {

  @Input("headline") year: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    console.log('Hello TableDisasterousComponent Component');
    this.year = 'Hello World';

    // TODO: Remove this
    this.FormItem = TableDisasterousComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'count': [ null, Validators.required],
      'avgDay':[ null, Validators.required],
      'avgHour': [ null, Validators.required],
      'waterHeightCm': [ null, Validators.required],
      'year': [ null, Validators.required],
    });
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgTableDisasterousPage", { FormItem: this.FormItem, headline: this.year });
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
