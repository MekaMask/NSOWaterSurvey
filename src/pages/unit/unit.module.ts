import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnitPage } from './unit';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    UnitPage,
  ],
  imports: [
    IonicPageModule.forChild(UnitPage),
    ComponentsModule,
  ],
})
export class UnitPageModule {}
