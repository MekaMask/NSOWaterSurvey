import { CommunityActionsType, CommunityTypes } from "./community.actions";


export interface CommunityState {
    units: any,
    communitySample: any,
}

const initialState: CommunityState = {
    units: [],
    communitySample: null,
};

export function reducer(state: CommunityState = initialState, action: CommunityActionsType): CommunityState {
    switch (action.type) {
        case CommunityTypes.LoadListSuccess:
            return {
                ...state,
            };
        case CommunityTypes.LoadSuccess:
            return {
                ...state,
                communitySample: action.payload,
            };
        default:
            return state;
    }
}