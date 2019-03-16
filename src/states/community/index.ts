import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CommunityState } from './community.reducer';
import { CommunityTypes } from './community.actions';

const getCommunityFeatureState = createFeatureSelector<CommunityState>(CommunityTypes.StateName);

export const getCommunitySample = createSelector(
    getCommunityFeatureState,
    state => state.communitySample,
);