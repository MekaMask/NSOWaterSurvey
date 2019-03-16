import { Component, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { TableCheckItemCountComponent } from '../../components/table-check-item-count/table-check-item-count';
import { combineLatest } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-zero',
  templateUrl: 'zero.html',
})
export class ZeroPage {

  public f: FormGroup;

  public headtext = "กำหนดมาจาก code ห้ามใช้แบบนี้ในตอนนี้";

  private submitRequested: boolean;

  @ViewChild('ws8') ws8: ISubmitRequestable;
  @ViewChildren(TableCheckItemCountComponent) private checkedItems: ISubmitRequestable[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.f = this.fb.group({
      'name': [null, Validators.required],
      'fieldCount': 0,
      'fieldUsage': null,
      'fieldAreas': null,
      'area': this.fb.group({
        'rai': null,
        'ngan': null,
        'sqWa': null,
      }),
      'preSchool': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'kindergarten': this.fb.group({
        'hasItem': false,
        'itemCount': [null, Validators.required]
      }),
      'secondarySchool': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'vocational': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'waterSources': this.fb.group({
        'hasOther': false,
        'other': [null, Validators.required]
      })
    });

    const fieldCount = this.f.get('fieldCount');
    this.f.get('fieldUsage').valueChanges.pipe(
      combineLatest(fieldCount.valueChanges)
    ).subscribe(it => this.onFieldUsageChanges());

    // Call for the first time
    this.onFieldUsageChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZeroPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.ws8.submitRequest();
    this.checkedItems.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  public onFieldUsageChanges() {
    var fields = this.f.get('fieldAreas').value || [];
    var fieldCount = this.f.get('fieldCount').value || 0;
    var farr = this.fb.array([]);

    fieldCount = Math.max(1, fieldCount);

    for (let i = 0; i < fieldCount; i++) {
      var ctrl = null;
      if (i < fields.length) {
        const fld = fields[i];
        ctrl = fld;
      } else {
        ctrl = { 'rai': null, 'ngan': null, 'sqWa': null };
      }

      const fg = this.fb.group({
        'rai': null,
        'ngan': null,
        'sqWa': null,
      });
      fg.setValue(ctrl);
      farr.push(fg);
    }
    this.f.setControl('fieldAreas', farr);
  }

}
