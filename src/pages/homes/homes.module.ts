import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomesPage } from './homes';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HomesPage,
  ],
  imports: [
    IonicPageModule.forChild(HomesPage),
    
  ],
})
export class HomesPageModule {}
