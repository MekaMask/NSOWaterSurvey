import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HouseHoldState } from './household.reducer';
import { HouseHoldTypes } from './household.actions';

const getHouseHoldFeatureState = createFeatureSelector<HouseHoldState>(HouseHoldTypes.StateName);

export const getHouseHoldUnitList = createSelector(
    getHouseHoldFeatureState,
    state => state.units,
);

export const getHouseHoldSample = createSelector(
    getHouseHoldFeatureState,
    state => state.houseHoldSample,
);

export const getFactorialCategory = createSelector(
    getHouseHoldFeatureState,
    state => state.factorialCategory,
);
export const getWaterSource = createSelector(
    getHouseHoldFeatureState,
    state => state.waterSources,
);
export const getCommercialServiceType = createSelector(
    getHouseHoldFeatureState,
    state => state.commercialServiceType,
);
export const getResidentialGardeningUse = createSelector(
    getHouseHoldFeatureState,
    state => state.residentialGardeningUse,
);
export const getAgronomyPlantDoing = createSelector(
    getHouseHoldFeatureState,
    state => state.agronomyPlantDoing,
);

export const getRubberTreeSelectPlant = createSelector(
    getHouseHoldFeatureState,
    state => state.rubberTreeSelectPlant,
);
export const getRicePlantSelectPlant = createSelector(
    getHouseHoldFeatureState,
    state => state.ricePlantSelectPlant,
);
export const getPerennialPlantSelectPlant = createSelector(
    getHouseHoldFeatureState,
    state => state.perennialPlantSelectPlant,
);
export const getAgronomyPlantSelectPlant = createSelector(
    getHouseHoldFeatureState,
    state => state.agronomyPlantSelectPlant,
);