import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { CommunityWaterManagementPage } from './community-water-management';

@NgModule({
  declarations: [
    CommunityWaterManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(CommunityWaterManagementPage),
    ComponentsModule,
  ],
})
export class CommunityWaterManagementPageModule {}
