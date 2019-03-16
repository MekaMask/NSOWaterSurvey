import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BuildingState } from './building.reducer';
import { BuildingTypes } from './building.actions';

const getBuildingFeatureState = createFeatureSelector<BuildingState>(BuildingTypes.StateName);

export const getBuildingSample = createSelector(
    getBuildingFeatureState,
    state => state.buildingSample,

);
export const getSendDataBuilding = createSelector(
    getBuildingFeatureState,
    state => state.sendDataBuilding,
);

