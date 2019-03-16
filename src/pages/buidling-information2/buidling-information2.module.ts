import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuidlingInformation2Page } from './buidling-information2';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BuidlingInformation2Page,
  ],
  imports: [
    IonicPageModule.forChild(BuidlingInformation2Page),
    ComponentsModule,
  ],
})
export class BuidlingInformation2PageModule {}
