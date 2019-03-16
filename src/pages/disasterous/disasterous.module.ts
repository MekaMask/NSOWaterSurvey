import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisasterousPage } from './disasterous';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DisasterousPage,
  ],
  imports: [
    IonicPageModule.forChild(DisasterousPage),
    ComponentsModule,
  ],
})
export class DisasterousPageModule {}
