import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyingPage } from './buying';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BuyingPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyingPage),
    ComponentsModule
  ],
})
export class BuyingPageModule {}
