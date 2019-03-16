import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { CommercialPage } from './Commercial';

@NgModule({
  declarations: [
    CommercialPage,
  ],
  imports: [
    IonicPageModule.forChild(CommercialPage),
    ComponentsModule,
  ],
})
export class CommercialPageModule {}
