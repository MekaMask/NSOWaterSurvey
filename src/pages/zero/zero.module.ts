import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZeroPage } from './zero';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ZeroPage,
  ],
  imports: [
    IonicPageModule.forChild(ZeroPage),
    ComponentsModule
  ],
})
export class ZeroPageModule {}
