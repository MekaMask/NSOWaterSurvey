import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildingInformation1Page } from './building-information1';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BuildingInformation1Page,
  ],
  imports: [
    IonicPageModule.forChild(BuildingInformation1Page),
    ComponentsModule
  ],
})
export class BuildingInformation1PageModule {}
