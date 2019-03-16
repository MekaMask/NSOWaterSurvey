import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RicePage } from './rice';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RicePage,
  ],
  imports: [
    IonicPageModule.forChild(RicePage),
    ComponentsModule
  ],
})
export class RisePageModule {}
