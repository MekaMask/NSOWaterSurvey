import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResidentialShellPage } from './residential-shell';
import { ResidentialPageModule } from '../../../pages/residential/residential.module';
import { ResidentialPage } from '../../../pages/residential/residential';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ResidentialShellPage,
    ResidentialPage,
  ],
  imports: [
    IonicPageModule.forChild(ResidentialShellPage),
    ComponentsModule,
  ],
})
export class ResidentialShellPageModule {}
