import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagementForFarmingPage } from './management-for-farming';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ManagementForFarmingPage,
  ],
  imports: [
    IonicPageModule.forChild(ManagementForFarmingPage),
    ComponentsModule,
  ],
})
export class ManagementForFarmingPageModule {}
