import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FactorialPage } from './factorial';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FactorialPage,
  ],
  imports: [
    IonicPageModule.forChild(FactorialPage),
    ComponentsModule,
  ],
})
export class FactorialPageModule {}
