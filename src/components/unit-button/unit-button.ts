import { getSendDataBuilding } from './../../states/building/index';
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { HouseHoldState } from '../../states/household/household.reducer';
import { map } from 'rxjs/operators';
import { getHouseHoldSample } from '../../states/household';

/**
 * Generated class for the UnitButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'unit-button',
  templateUrl: 'unit-button.html'
})
export class UnitButtonComponent {

  @Input() forwardFormData$: any;
  @Input("headline") public text: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s));


  constructor(private modalCtrl: ModalController, private store: Store<HouseHoldState>, private storeBuild: Store<BuildingState>, private fb: FormBuilder) {
    console.log('Hello UnitButtonComponent Component');
    this.text = '';

    // TODO: Remove this
    this.FormItem = UnitButtonComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'ea': [null, Validators.required],
      'buildingId': [null, Validators.required],
      'subUnit': fb.group({
        'roomNumber': [null, Validators.required],
        'access': [null, Validators.required],
        'hasPlumbing': [null, Validators.required],
        'hasPlumbingMeter': [false, Validators.required],
        'isPlumbingMeterXWA': [false, Validators.required],
        'hasGroundWater': [null, Validators.required],
        'hasGroundWaterMeter': [false, Validators.required],
      }),
      'isHouseHold': [null, Validators.required],
      'isAgriculture': [null, Validators.required],
      'isFactorial': [null, Validators.required],
      'isCommercial': [null, Validators.required],
      'comments': fb.group({
        'at': [null, Validators.required],
        'text': [null, Validators.required],
      }),
    });
  }

  public showModal() {


    const modal = this.modalCtrl.create("DlgUnitPage", { FormItem: this.FormItem });
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

  ionViewDidEnter() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitButtonComponent');
    this.formData$.subscribe(data => this.FormItem.setValue(data));
    // this.DlgUnitPage.forEach(it => it.ionViewDidLoad());
    console.log('dasdsadsad');
    console.log(this.FormItem);

  }



  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
