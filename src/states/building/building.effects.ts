import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BuildingTypes, LoadBuildingListSuccess, LoadBuildingSampleSuccess } from "./building.actions";
import { mergeMap, map } from "rxjs/operators";
import { Action } from "@ngrx/store";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";


@Injectable()
export class BuildingEffects {
    constructor(private action$: Actions, private cloudSync: CloudSyncProvider) {
    }

    @Effect()
    public loadBuildingList$: Observable<Action> = this.action$.pipe(
        ofType(BuildingTypes.LoadList),
        mergeMap(action => Observable.of(new LoadBuildingListSuccess())),
    );

    @Effect()
    public loadBuildingSample$: Observable<Action> = this.action$.pipe(
        ofType(BuildingTypes.Load),
        mergeMap(action => this.cloudSync.loadBuildingSampleTestData().pipe(
                map(data => new LoadBuildingSampleSuccess(data)),
            )
        ),
    );
}