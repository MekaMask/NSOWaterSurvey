import { HouseHoldActionsType, HouseHoldTypes } from "./household.actions";


export interface HouseHoldState {
    units: any,
    houseHoldSample: any,
    factorialCategory: string,
    // factorialWaterSources: any,
    // residentialWaterSources: any,
    residentialGardeningUse: any,
    commercialServiceType: any,
    // commercialWaterSources: any,
    agricultureRicePlant: any,
    agricultureAgronomyPlant: any,
    agricultureRubberTree: any,
    agriculturePerennialPlant: any,
    agricultureHerbsPlant: any,
    agricultureFlowerCrop: any,
    agricultureMushroomPlant: any,
    agricultureAnimalFarm: any,
    agricultureAquaticAnimals: any,
    ricePlantDoing: any,
    agronomyPlantDoing: any,
    rubberTreeDoing: any,
    perennialPlantDoing: any,
    // ricePlantWaterSources: any,
    // agronomyPlantWaterSources: any,
    // rubberTreeWaterSources: any,
    // perennialPlantWaterSources: any,
    // herbsPlantWaterSources: any,
    // flowerCropWaterSources: any,
    // mushroomPlantWaterSources: any,
    // animalFarmWaterSources: any,
    // aquaticAnimalsWaterSources: any,
    waterSources: any,
    rubberTreeSelectPlant: any[],
    perennialPlantSelectPlant: any[],
    ricePlantSelectPlant: any[],
    agronomyPlantSelectPlant: any[],
}

const initialState: HouseHoldState = {
    units: [],
    houseHoldSample: null,
    factorialCategory: null,
    // factorialWaterSources: null,
    // residentialWaterSources: null,
    residentialGardeningUse: null,
    commercialServiceType: null,
    // commercialWaterSources: null,
    agricultureRicePlant: null,
    agricultureAgronomyPlant: null,
    agricultureRubberTree: null,
    agriculturePerennialPlant: null,
    agricultureHerbsPlant: null,
    agricultureFlowerCrop: null,
    agricultureMushroomPlant: null,
    agricultureAnimalFarm: null,
    agricultureAquaticAnimals: null,
    ricePlantDoing: null,
    agronomyPlantDoing: [],
    rubberTreeDoing: null,
    perennialPlantDoing: null,
    // ricePlantWaterSources: null,
    // agronomyPlantWaterSources: null,
    // rubberTreeWaterSources: null,
    // perennialPlantWaterSources: null,
    // herbsPlantWaterSources: null,
    // flowerCropWaterSources: null,
    // mushroomPlantWaterSources: null,
    // animalFarmWaterSources: null,
    // aquaticAnimalsWaterSources: null,
    waterSources: null,
    rubberTreeSelectPlant: [],
    perennialPlantSelectPlant: [],
    ricePlantSelectPlant: [],
    agronomyPlantSelectPlant: [],

};

export function reducer(state: HouseHoldState = initialState, action: HouseHoldActionsType): HouseHoldState {
    switch (action.type) {
        case HouseHoldTypes.LoadListSuccess:
            return {
                ...state,
            };
        case HouseHoldTypes.LoadSuccess:
            return {
                ...state,
                houseHoldSample: action.payload,
            };
        case HouseHoldTypes.SetFactorialCategory:
            return {
                ...state,
                factorialCategory: action.payload,
            };
        case HouseHoldTypes.SetCommercialServiceType:
            return {
                ...state,
                commercialServiceType: action.payload,
            };
        case HouseHoldTypes.SetresidentialGardeningUse:
            return {
                ...state,
                residentialGardeningUse: action.payload,
            };
        case HouseHoldTypes.SetWaterSource:
            return {
                ...state,
                waterSources: action.payload,
            };
        case HouseHoldTypes.SetAgronomyPlantDoing:
            return {
                ...state,
                agronomyPlantDoing: action.payload,
            };
        case HouseHoldTypes.SetRicePlantSelectPlant:
            return {
                ...state,
                ricePlantSelectPlant: action.payload,
            };
        case HouseHoldTypes.SetAgronomyPlantSelectPlant:
            return {
                ...state,
                agronomyPlantSelectPlant: action.payload,
            };
        case HouseHoldTypes.SetRubberTreeSelectPlant:
            return {
                ...state,
                rubberTreeSelectPlant: action.payload,
            };
        case HouseHoldTypes.SetPerennialPlantSelectPlant:
            return {
                ...state,
                perennialPlantSelectPlant: action.payload,
            };
        default:
            return state;
    }
}