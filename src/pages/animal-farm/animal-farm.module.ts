import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalFarmPage } from './animal-farm';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AnimalFarmPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimalFarmPage),
    ComponentsModule,
  ],
})
export class AnimalFarmPageModule {}
