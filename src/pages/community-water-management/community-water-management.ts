import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailWaterManagementComponent } from '../../components/detail-water-management/detail-water-management';
import { DetailOrgWaterSupplyComponent } from '../../components/detail-org-water-supply/detail-org-water-supply';
import { NaturalDisasterComponent } from '../../components/natural-disaster/natural-disaster';
import { DisasterWarningMethodsComponent } from '../../components/disaster-warning-methods/disaster-warning-methods';
import { getCommunitySample } from '../../states/community';
import { CommunityState } from '../../states/community/community.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-community-water-management',
  templateUrl: 'community-water-management.html',
})
export class CommunityWaterManagementPage {
  @ViewChildren(NaturalDisasterComponent) private naturalDisaster: NaturalDisasterComponent[];
  @ViewChildren(DisasterWarningMethodsComponent) private disasterWarningMethods: DisasterWarningMethodsComponent[];
  @ViewChildren(DetailWaterManagementComponent) private detailWaterManagement: DetailWaterManagementComponent[];
  @ViewChildren(DetailOrgWaterSupplyComponent) private detailOrgWaterSupply: DetailOrgWaterSupplyComponent[];

  public CommunityWaterManagement: FormGroup
  private submitRequested: boolean;

  private formData$ = this.store.select(getCommunitySample).pipe(map(s => s.management));

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<CommunityState>) {
    this.CommunityWaterManagement = this.fb.group({
      'hasPublicWater': [null, Validators.required],
      'publicWaterCount': [null, Validators.required],
      'details': fb.array([]),
      'pwa': [null, Validators.required],
      'mwa': [null, Validators.required],
      'otherPlumbing': [null, Validators.required],
      'hasWaterService': [null, Validators.required],
      'waterServiceCount': [null, Validators.required],
      'waterServices': fb.array([]),
      'hasWaterTreatment': [null, Validators.required],
      'hasDisaster': [null, Validators.required],
      'disasters': NaturalDisasterComponent.CreateFormGroup(fb),
      'hasDisasterWarning': [null, Validators.required],
      'disasterWarningMethods': DisasterWarningMethodsComponent.CreateFormGroup(fb),
    });
    this.setupPublicWaterCountChanges();
    this.setupWaterServiceCountChanges();

  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.CommunityWaterManagement.setValue(data));
  }

  private setupPublicWaterCountChanges() {
    const componentFormArray: string = "details";
    const componentCount: string = "publicWaterCount";

    var onComponentCountChanges = () => {
      var fieldFlowerCrop = (this.CommunityWaterManagement.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.CommunityWaterManagement.get(componentCount).value || 0;
      var field = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fieldFlowerCrop.length) {
          const fld = fieldFlowerCrop[i];
          ctrl = fld;
        } else {
          ctrl = DetailWaterManagementComponent.CreateFormGroup(this.fb);
        }

        field.push(ctrl);
      }
      this.CommunityWaterManagement.setControl(componentFormArray, field);
    };

    this.CommunityWaterManagement.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }


  private setupWaterServiceCountChanges() {
    const waterservicecomponentFormArray: string = "waterServices";
    const waterservicecomponentCount: string = "waterServiceCount";

    var onWaterServiceComponentCountChanges = () => {
      var waterServices = (this.CommunityWaterManagement.get(waterservicecomponentFormArray) as FormArray).controls || [];
      var waterServiceCount = this.CommunityWaterManagement.get(waterservicecomponentCount).value || 0;
      var waterService = this.fb.array([]);

      waterServiceCount = Math.max(0, waterServiceCount);

      for (let i = 0; i < waterServiceCount; i++) {
        var ctrl = null;
        if (i < waterServices.length) {
          const fld = waterServices[i];
          ctrl = fld;
        } else {
          ctrl = DetailOrgWaterSupplyComponent.CreateFormGroup(this.fb);
        }

        waterService.push(ctrl);
      }
      this.CommunityWaterManagement.setControl(waterservicecomponentFormArray, waterService);
    };

    this.CommunityWaterManagement.get(waterservicecomponentCount).valueChanges.subscribe(it => onWaterServiceComponentCountChanges());

    onWaterServiceComponentCountChanges();
  }


  public handleSubmit() {
    this.submitRequested = true;
    this.detailWaterManagement.forEach(it => it.submitRequest());
    this.detailOrgWaterSupply.forEach(it => it.submitRequest());
    this.naturalDisaster.forEach(it => it.submitRequest());
    this.disasterWarningMethods.forEach(it => it.submitRequest());

  }


  public isValid(name: string): boolean {
    var ctrl = this.CommunityWaterManagement.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  // public isValid(name: string): boolean {
  //   var ctrl = this.CommunityWaterManagement.get(name);
  //   if (name == 'anycheck') {
  //     ctrl = this.CommunityWaterManagement;
  //     return ctrl.errors && ctrl.errors.anycheck && (ctrl.touched || this.submitRequested);
  //   }
  //   //  validate checkbox กรณีที่ใช้ในหน้า page หลักจะใช้ไม่เหมือนแบบ component
  //   else if (name == 'disasterWarningMethods') {
  //     return ctrl.errors && ctrl.errors.anycheck && (ctrl.touched || this.submitRequested);
  //   }
  //   //  validate checkbox โดยมี other ด้านในกรณีที่ใช้ในหน้า page หลักใช้ไม่เหมือนแบบ component
  //   else if (name == 'other') {
  //     let ctrl2 = this.CommunityWaterManagement.get('disasterWarningMethods');
  //     ctrl = this.CommunityWaterManagement.get('disasterWarningMethods.other');
  //     return ctrl2.errors && ctrl2.errors.other && (ctrl.touched || this.submitRequested);
  //   }
  //   return ctrl.invalid && (ctrl.touched || this.submitRequested);
  // }
}
