import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResidentialPage } from './residential';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ResidentialPage,
  ],
  imports: [
    IonicPageModule.forChild(ResidentialPage),
    ComponentsModule,
  ],
})
export class ResidentialPageModule {}
