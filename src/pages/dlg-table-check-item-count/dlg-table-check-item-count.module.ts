import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DlgTableCheckItemCountPage } from './dlg-table-check-item-count';

@NgModule({
  declarations: [
    DlgTableCheckItemCountPage,
  ],
  imports: [
    IonicPageModule.forChild(DlgTableCheckItemCountPage),
  ],
})
export class DlgTableCheckItemCountPageModule {}
