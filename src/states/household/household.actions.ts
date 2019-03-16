import { Action } from '@ngrx/store';

export enum HouseHoldTypes {
    StateName = "HouseHold",
    LoadList = "[HH] Load List",
    LoadListSuccess = "[HH] Load List Success",
    Load = "[HH] Load",
    LoadSuccess = "[HH] Load Success",
    SetFactorialCategory = "[HH] Set Factorial Category",
    SetWaterSource = "[HH] Set WaterSource",
    SetCommercialServiceType = "[HH] Set Commercial ServiceType",
    SetresidentialGardeningUse = "residentialGardeningUse",
    SetAgronomyPlantDoing = "[HH] Set AgronomyPlant Doing",
    SetRubberTreeSelectPlant = "[HH] Set Rubbertree Select Plant",
    SetPerennialPlantSelectPlant = "[HH] Set PerennialPlant Select Plant",
    SetRicePlantSelectPlant = "[HH] Set RicePlant Select Plant",
    SetAgronomyPlantSelectPlant = "[HH] Set AgronomyPlant Select Plant",
}



export class LoadHouseHoldList implements Action {
    readonly type = HouseHoldTypes.LoadList;

    constructor() {
    }
}

export class LoadHouseHoldListSuccess implements Action {
    readonly type = HouseHoldTypes.LoadListSuccess;

    constructor() {
    }
}

export class LoadHouseHoldSample implements Action {
    readonly type = HouseHoldTypes.Load;

    constructor() {
    }
}

export class LoadHouseHoldSampleSuccess implements Action {
    readonly type = HouseHoldTypes.LoadSuccess;

    constructor(public payload: any) {
    }
}

export class SetFactorialCategory implements Action {
    readonly type = HouseHoldTypes.SetFactorialCategory;

    constructor(public payload: string) {
    }
}

export class SetWaterSources implements Action {
    readonly type = HouseHoldTypes.SetWaterSource;
    constructor(public payload: any) {
    }
}
export class SetAgronomyPlantDoing implements Action {
    readonly type = HouseHoldTypes.SetAgronomyPlantDoing;

    constructor(public payload: any) {
    }
}
export class SetCommercialServiceType implements Action {
    readonly type = HouseHoldTypes.SetCommercialServiceType;

    constructor(public payload: any) {
    }
}
export class SetresidentialGardeningUse implements Action {
    readonly type = HouseHoldTypes.SetresidentialGardeningUse;

    constructor(public payload: string) {
    }
}
export class SetRubberTreeSelectPlant implements Action {
    readonly type = HouseHoldTypes.SetRubberTreeSelectPlant;

    constructor(public payload: any[]) {
    }
}
export class SetPerennialPlantSelectPlant implements Action {
    readonly type = HouseHoldTypes.SetPerennialPlantSelectPlant;

    constructor(public payload: any[]) {
    }
}


export class SetRicePlantSelectPlant implements Action {
    readonly type = HouseHoldTypes.SetRicePlantSelectPlant;

    constructor(public payload: any[]) {
    }
}

export class SetAgronomyPlantSelectPlant implements Action {
    readonly type = HouseHoldTypes.SetAgronomyPlantSelectPlant;

    constructor(public payload: any[]) {
    }
}
export type HouseHoldActionsType =
    LoadHouseHoldList
    | LoadHouseHoldListSuccess
    | LoadHouseHoldSample
    | LoadHouseHoldSampleSuccess
    | SetFactorialCategory
    | SetWaterSources
    | SetCommercialServiceType
    | SetresidentialGardeningUse
    | SetAgronomyPlantDoing
    | SetRubberTreeSelectPlant
    | SetPerennialPlantSelectPlant
    | SetRicePlantSelectPlant
    | SetAgronomyPlantSelectPlant
    | SetCommercialServiceType

    ;