import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IrrigationPage } from './irrigation';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    IrrigationPage,
  ],
  imports: [
    IonicPageModule.forChild(IrrigationPage),
    ComponentsModule,
  ],
})
export class IrrigationPageModule {}
