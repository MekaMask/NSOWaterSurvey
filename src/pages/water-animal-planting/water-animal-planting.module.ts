import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterAnimalPlantingPage } from './water-animal-planting';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    WaterAnimalPlantingPage,
  ],
  imports: [
    IonicPageModule.forChild(WaterAnimalPlantingPage),
    ComponentsModule,
  ],
})
export class WaterAnimalPlantingPageModule {}
