import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DlgRainStoragePage } from './dlg-rain-storage';

@NgModule({
  declarations: [
    DlgRainStoragePage,
  ],
  imports: [
    IonicPageModule.forChild(DlgRainStoragePage),
  ],
})
export class DlgRainStoragePageModule {}
