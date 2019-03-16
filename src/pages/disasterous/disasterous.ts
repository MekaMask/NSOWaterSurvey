import { Component, Input, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableDisasterousComponent } from '../../components/table-disasterous/table-disasterous';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { getHouseHoldSample } from '../../states/household';

@IonicPage()
@Component({
  selector: 'page-disasterous',
  templateUrl: 'disasterous.html',
})
export class DisasterousPage {

  @ViewChildren(TableDisasterousComponent) private tableDisasterous: TableDisasterousComponent[];
  @Input("headline") private text: string;
  private submitRequested: boolean;
  Disasterous: FormGroup;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.disaster));

  constructor(private modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.Disasterous = this.fb.group({
      '_id': [null],
      'flooded': [null, Validators.required],
      'yearsDisasterous': this.fb.array([
        TableDisasterousComponent.CreateFormGroup(this.fb),
        TableDisasterousComponent.CreateFormGroup(this.fb),
        TableDisasterousComponent.CreateFormGroup(this.fb),
        TableDisasterousComponent.CreateFormGroup(this.fb),
        TableDisasterousComponent.CreateFormGroup(this.fb),
      ]),
    })
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.Disasterous.setValue(data));
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgTableDisasterousPage", { FormItem: this.Disasterous, headline: this.text });
    modal.onDidDismiss(data => {
      if (data) {
        var fg = <FormGroup>data;
        this.Disasterous.setValue(fg.value);
      }
    });
    modal.present();
  }
  public handleSubmit() {
    this.submitRequested = true;
    this.tableDisasterous.forEach(it => it.submitRequest());
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.Disasterous.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
