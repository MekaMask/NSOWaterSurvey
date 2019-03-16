import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FieldAreaComponent } from '../../components/field-area/field-area';

@IonicPage()
@Component({
  selector: 'page-dlg-field-area',
  templateUrl: 'dlg-field-area.html',
})
export class DlgFieldAreaPage {

  public FormItem: FormGroup;
  public text: string;

  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private viewCtrl: ViewController) {
    this.FormItem = FieldAreaComponent.CreateFormGroup(this.fb);
    const datain = navParams.get('FormItem') as FormGroup;
    this.FormItem.setValue(datain.value);
    this.text = navParams.get("headline");
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.submitRequested = true;
    if (this.FormItem.valid) {
      this.viewCtrl.dismiss(this.FormItem);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgFieldAreaPage');
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
