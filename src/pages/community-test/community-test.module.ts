import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunityTestPage } from './community-test';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommunityTypes } from '../../states/community/community.actions';
import { reducer } from '../../states/community/community.reducer';
import { CommunityEffects } from '../../states/community/community.effects';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CommunityTestPage,
  ],
  imports: [
    IonicPageModule.forChild(CommunityTestPage),
    ComponentsModule,
    StoreModule.forFeature(CommunityTypes.StateName, reducer),
    EffectsModule.forFeature([
      CommunityEffects,
    ]),
  ],
})
export class CommunityTestPageModule {}
