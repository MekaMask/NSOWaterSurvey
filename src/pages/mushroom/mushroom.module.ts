import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MushroomPage } from './mushroom';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MushroomPage,
  ],
  imports: [
    IonicPageModule.forChild(MushroomPage),
    ComponentsModule
  ],
})
export class MushroomPageModule {}
