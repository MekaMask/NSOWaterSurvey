import { Action } from '@ngrx/store';

export enum CommunityTypes {
    StateName = "Community",
    LoadList = "[CM] Load List",
    LoadListSuccess = "[CM] Load List Success",
    Load = "[CM] Load",
    LoadSuccess = "[CM] Load Success",
}



export class LoadCommunityList implements Action {
    readonly type = CommunityTypes.LoadList;
    
    constructor() {
    }
}

export class LoadCommunityListSuccess implements Action {
    readonly type = CommunityTypes.LoadListSuccess;
    
    constructor() {
    }
}

export class LoadCommunitySample implements Action {
    readonly type = CommunityTypes.Load;

    constructor() {
    }
}

export class LoadCommunitySampleSuccess implements Action {
    readonly type = CommunityTypes.LoadSuccess;

    constructor(public payload: any) {
    }
}



export type CommunityActionsType =
    LoadCommunityList
    | LoadCommunityListSuccess
    | LoadCommunitySample
    | LoadCommunitySampleSuccess
    ;