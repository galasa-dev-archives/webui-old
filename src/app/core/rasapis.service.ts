import { Injectable } from '@angular/core';

import { RasRequestorsApi, RasTestclassesApi } from 'galasa-ras-api-ts-rxjs';

import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class RasApisService {

  rasRequestorsApi: RasRequestorsApi = new RasRequestorsApi();

  constructor(private securityService:SecurityService) { }




  public getRasRequestors() :RasRequestorsApi {
    return this.rasRequestorsApi;
  }
}
