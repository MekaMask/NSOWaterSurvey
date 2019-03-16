import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlowerCropPage } from './flower-crop';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FlowerCropPage,
  ],
  imports: [
    IonicPageModule.forChild(FlowerCropPage),
    ComponentsModule,
  ],
})
export class FlowerCropPageModule {}
