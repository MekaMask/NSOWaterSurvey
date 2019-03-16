import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgriculturePage } from './agriculture';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AgriculturePage,
  ],
  imports: [
    IonicPageModule.forChild(AgriculturePage),
    ComponentsModule,
  ],
})
export class AgriculturePageModule {}
