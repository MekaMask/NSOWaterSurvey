import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisasterPage } from './disaster';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DisasterPage,
  ],
  imports: [
    IonicPageModule.forChild(DisasterPage),
    ComponentsModule,
  ],
})
export class DisasterPageModule {}
