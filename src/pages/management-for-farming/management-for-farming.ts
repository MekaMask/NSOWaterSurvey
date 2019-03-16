import { CommunityState } from './../../states/community/community.reducer';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DetailManagementForFarmingComponent } from '../../components/detail-management-for-farming/detail-management-for-farming';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { getCommunitySample } from '../../states/community';

@IonicPage()
@Component({
  selector: 'page-management-for-farming',
  templateUrl: 'management-for-farming.html',
})
export class ManagementForFarmingPage {

  @ViewChildren(DetailManagementForFarmingComponent) private detailManagementForFarming: DetailManagementForFarmingComponent[];

  public managementforfarming: FormGroup;
  private submitRequested: boolean;

  private formData$ = this.store.select(getCommunitySample).pipe(map(s => s.communityProject));

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private store: Store<CommunityState>) {
    this.managementforfarming = this.fb.group({
      'doing': [null, Validators.required],
      'projectCount': [null, Validators.required],
      'details': fb.array([]),
    });
    this.setupprojectcountChanges();
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.detailManagementForFarming.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.managementforfarming.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagementForFarmingPage');
    this.formData$.subscribe(data => this.managementforfarming.setValue(data));
  }

  private setupprojectcountChanges() {
    const componentFormArray: string = "details";
    const componentCount: string = "projectCount";

    var onComponentCountChanges = () => {
      var fieldFlowerCrop = (this.managementforfarming.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.managementforfarming.get(componentCount).value || 0;
      var field = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fieldFlowerCrop.length) {
          const fld = fieldFlowerCrop[i];
          ctrl = fld;
        } else {
          ctrl = DetailManagementForFarmingComponent.CreateFormGroup(this.fb);
        }

        field.push(ctrl);
      }
      this.managementforfarming.setControl(componentFormArray, field);
    };

    this.managementforfarming.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

}
