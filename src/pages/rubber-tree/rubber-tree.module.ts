import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RubberTreePage } from './rubber-tree';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RubberTreePage,
    
  ],
  imports: [
    IonicPageModule.forChild(RubberTreePage),
    ComponentsModule,
  ],
})
export class RubberTreePageModule {}
