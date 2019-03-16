import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterSources8AComponent } from './water-sources8-a/water-sources8-a';
import { DemoNaComponent } from './demo-na/demo-na';
import { PumpComponent } from './pump/pump';
import { WaterSources8BComponent } from './water-sources8-b/water-sources8-b';
import { WaterSources9Component } from './water-sources9/water-sources9';

import { FieldAreaComponent } from './field-area/field-area';
import { PoolAreaComponent } from './pool-area/pool-area';
import { TableCheckItemCountComponent } from './table-check-item-count/table-check-item-count';
import { WaterActivity5Component } from './water-activity5/water-activity5';
import { WaterActivity6Component } from './water-activity6/water-activity6';
import { WaterProblem4Component } from './water-problem4/water-problem4';
import { WaterProblem6Component } from './water-problem6/water-problem6';
import { RainStorageComponent } from './rain-storage/rain-storage';
import { LocationComponent } from './location/location';
import { TableBuyingComponent } from './table-buying/table-buying';
import { TableDisasterousComponent } from './table-disasterous/table-disasterous';
import { TableBuyingOtherComponent } from './table-buying-other/table-buying-other';
import { QuestionnaireMenuPopoverComponent } from './questionnaire-menu-popover/questionnaire-menu-popover';
import { QuestionnaireMenuComponent } from './questionnaire-menu/questionnaire-menu';
import { PoolUsageComponent } from './pool-usage/pool-usage';
import { GroundWaterUsageComponent } from './ground-water-usage/ground-water-usage';
import { GroundWaterUsagePublicComponent } from './ground-water-usage-public/ground-water-usage-public';
import { FormButtonsBarComponent } from './form-buttons-bar/form-buttons-bar';
import { FieldFarmingComponent } from './field-farming/field-farming';
import { FieldRiceHarvestComponent } from './field-rice-harvest/field-rice-harvest';
import { FieldDryCropPlantingComponent } from './field-dry-crop-planting/field-dry-crop-planting';
import { FieldHerbsPlantComponent } from './field-herbs-plant/field-herbs-plant';
import { FieldMushroomComponent } from './field-mushroom/field-mushroom';
import { FieldRebbertreeComponent } from './field-rebbertree/field-rebbertree';
import { FieldPerenialPlantingComponent } from './field-perenial-planting/field-perenial-planting';
import { FishFarmingComponent } from './fish-farming/fish-farming';
import { FrogFarmingComponent } from './frog-farming/frog-farming';
import { CrocodileFarmingComponent } from './crocodile-farming/crocodile-farming';
import { FieldFlowerCropComponent } from './field-flower-crop/field-flower-crop';
import { DetailWaterManagementComponent } from './detail-water-management/detail-water-management';
import { DetailManagementForFarmingComponent } from './detail-management-for-farming/detail-management-for-farming';
import { DetailOrgWaterSupplyComponent } from './detail-org-water-supply/detail-org-water-supply';
import { NaturalDisasterComponent } from './natural-disaster/natural-disaster';
import { DisasterWarningMethodsComponent } from './disaster-warning-methods/disaster-warning-methods';
import { ModalPlantComponent } from './modal-plant/modal-plant';
import { UnitButtonComponent } from './unit-button/unit-button';
import { TablePopulationComponent } from './table-population/table-population';

@NgModule({
  declarations: [WaterSources8AComponent,
    DemoNaComponent,
    PumpComponent,
    WaterSources8BComponent,
    WaterSources9Component,
    FieldAreaComponent,
    PoolAreaComponent,
    TableCheckItemCountComponent,
    WaterActivity5Component,
    WaterActivity6Component,
    WaterActivity5Component,
    WaterProblem4Component,
    WaterProblem4Component,
    RainStorageComponent,
    LocationComponent,
    TableBuyingComponent,
    TableDisasterousComponent,
    TableBuyingOtherComponent,
    QuestionnaireMenuPopoverComponent,
    QuestionnaireMenuComponent,
    PoolUsageComponent,
    GroundWaterUsageComponent,
    GroundWaterUsagePublicComponent,
    FormButtonsBarComponent,
    FieldFarmingComponent,
    FieldRiceHarvestComponent,
    FieldDryCropPlantingComponent,
    FieldHerbsPlantComponent,
    FieldMushroomComponent,
    FieldRebbertreeComponent,
    FieldPerenialPlantingComponent,
    FishFarmingComponent,
    FrogFarmingComponent,
    CrocodileFarmingComponent,
    FieldFlowerCropComponent,
    DetailWaterManagementComponent,
    DetailManagementForFarmingComponent,
    DetailOrgWaterSupplyComponent,
    NaturalDisasterComponent,
    DisasterWarningMethodsComponent,
    WaterProblem6Component,
    ModalPlantComponent,
    UnitButtonComponent,
    TablePopulationComponent
  ],
  imports: [
    IonicPageModule.forChild(QuestionnaireMenuPopoverComponent),
  ],
  entryComponents: [
    QuestionnaireMenuPopoverComponent,
  ],
  exports: [WaterSources8AComponent,
    DemoNaComponent,
    PumpComponent,
    WaterSources8BComponent,
    WaterSources9Component,
    FieldAreaComponent,
    PoolAreaComponent,
    TableCheckItemCountComponent,
    WaterActivity5Component,
    WaterActivity6Component,
    WaterActivity5Component,
    WaterProblem4Component,
    WaterProblem4Component,
    RainStorageComponent,
    LocationComponent,
    TableBuyingComponent,
    TableDisasterousComponent,
    TableBuyingOtherComponent,
    QuestionnaireMenuPopoverComponent,
    QuestionnaireMenuComponent,
    PoolUsageComponent,
    GroundWaterUsageComponent,
    GroundWaterUsagePublicComponent,
    FormButtonsBarComponent,
    FieldFarmingComponent,
    FieldRiceHarvestComponent,
    FieldDryCropPlantingComponent,
    FieldHerbsPlantComponent,
    FieldMushroomComponent,
    FieldRebbertreeComponent,
    FieldPerenialPlantingComponent,
    FishFarmingComponent,
    FrogFarmingComponent,
    CrocodileFarmingComponent,
    FieldFlowerCropComponent,
    DetailWaterManagementComponent,
    DetailManagementForFarmingComponent,
    DetailOrgWaterSupplyComponent,
    NaturalDisasterComponent,
    DisasterWarningMethodsComponent,
    WaterProblem6Component,
    ModalPlantComponent,
    UnitButtonComponent,
    TablePopulationComponent
  ]
})
export class ComponentsModule { }
