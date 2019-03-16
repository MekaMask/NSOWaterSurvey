import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, Content, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';

@IonicPage()
@Component({
  selector: 'page-search-dropdown',
  templateUrl: 'search-dropdown.html',
})
export class SearchDropdownPage {
  type: string;
  limit: number;
  treeDisplay = '';
  searchDisplay: Array<any>;
  searchTerm: string;
  listData: Array<any>;
  searchListData: Array<any>;
  @ViewChild(Content) content: Content;
  constructor(public viewCtrl: ViewController, public navParams: NavParams, private alertCtrl: AlertController, private store: Store<HouseHoldState>) {
    this.limit = navParams.get('limit');
    this.treeDisplay = navParams.get('title');
    this.listData = navParams.get('selected');
    this.searchListData = navParams.get('list');
    this.searchTerm = "";
    this.setFilteredItems();
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group(
      {
        'code': [null],
        'name': [null]
      },
    );
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

  close() {
    this.viewCtrl.dismiss(this.listData);
  }
  
  select(id, name) {
    if (this.listData.filter(data => data.code == id).length < 1) {
      if (this.listData.length < this.limit)
        this.listData.push({ 'code': id, 'name': name });
      else {
        const alert = this.alertCtrl.create({
          title: 'สามารถเลือกได้สูงสุด ' + this.limit + ' ชนิด',
          buttons: [{
            text: 'ตกลง',
          }]
        });
        alert.present();
      }
      this.scrollToTop();
    } else {
      const alert = this.alertCtrl.create({
        title: 'ไม่สามารถเลือกพืชชนิดซ้ำกันได้',
        buttons: [{
          text: 'ตกลง',
          handler: () => {

          }
        }]
      });
      alert.present();
    }
  }
  setFilteredItems() {
    this.searchDisplay = this.searchListData.filter((tree) => {
      let temp = '' + tree.code + tree.name;
      return temp.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }
  deselect(index) {
    this.listData.splice(index, 1)
  }
  range(min, max, step) {
    step = step || 1;
    let input = [];
    for (let i = min; i <= max; i += step) {
      input.push(i);
    }
    return input;
  }




}
