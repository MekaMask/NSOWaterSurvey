import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchDropdownPage } from './search-dropdown';

@NgModule({
  declarations: [
    SearchDropdownPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchDropdownPage),
  ],
})
export class SearchDropdownPageModule {}
