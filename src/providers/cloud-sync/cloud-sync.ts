import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the CloudSyncProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CloudSyncProvider {

  constructor(private http: HttpClient) {
    console.log('Create CloudSyncProvider Provider');
  }

  public loadHousHoldSampleTestData() : Observable<any> {
    return this.http.get('https://nsovars.azurewebsites.net/api/survey');
  }

  public loadCommunitySampleTestData() : Observable<any> {
    return this.http.get('https://nsovars.azurewebsites.net/api/survey/community');
  }

  public loadBuildingSampleTestData() : Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/survey/building');
  }

}
