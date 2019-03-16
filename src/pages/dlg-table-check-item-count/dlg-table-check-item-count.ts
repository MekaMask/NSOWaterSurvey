import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-dlg-table-check-item-count',
  templateUrl: 'dlg-table-check-item-count.html',
})
export class DlgTableCheckItemCountPage {

  public FormItem: FormGroup;
  public text: string;
  public unit: string;
  submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.FormItem = navParams.get('FormItem');
    this.text = navParams.get("iTitle");
    this.unit = navParams.get("unit");
   
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.viewCtrl.dismiss(this.FormItem);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgTableCheckItemCountPage');
  }

  

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'anycheck') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.touched || this.submitRequested);
    } 
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }


}
