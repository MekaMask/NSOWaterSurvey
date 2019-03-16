import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HouseHoldTestPage } from './house-hold-test';
import { StoreModule } from '@ngrx/store';
import { HouseHoldTypes } from '../../states/household/household.actions';
import { reducer } from '../../states/household/household.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HouseHoldEffects } from '../../states/household/household.effects';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HouseHoldTestPage,
  ],
  imports: [
    IonicPageModule.forChild(HouseHoldTestPage),
    ComponentsModule,
    StoreModule.forFeature(HouseHoldTypes.StateName, reducer),
    EffectsModule.forFeature([
      HouseHoldEffects,
    ]),
  ],
  providers: [
  ]
})
export class HouseHoldTestPageModule {}
