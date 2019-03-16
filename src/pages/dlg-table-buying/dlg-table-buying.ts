import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-dlg-table-buying',
  templateUrl: 'dlg-table-buying.html',
})
export class DlgTableBuyingPage {

  public FormItem: FormGroup;
  public text: string;
  public size: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.FormItem = navParams.get('FormItem');
    this.text = navParams.get("headline");
    this.size = navParams.get("size");
  }
  
  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.viewCtrl.dismiss(this.FormItem);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgTableBuyingPage');
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched);
  }

}
