import { Injectable } from '@angular/core';

import { RasRequestorsApi, RasTestclassesApi } from 'galasa-ras-api-ts-rxjs';
import { BootstrapService } from './bootstrap.service';

import { SecurityService } from './security.service';

//
// 
// Service to get the RAS APIs.
// Used so the complexity of the authentication tokens and the BASE URIs are hidden from the
// calling functions.
// 
// 

@Injectable({
  providedIn: 'root'
})
export class RasApisService {

  rasRequestorsApi: RasRequestorsApi;
  rasTestclassesApi: RasTestclassesApi;

  constructor(private securityService :SecurityService, // So we can get the necessary security information
              private bootstrapService :BootstrapService ) {  // So we can get the BASE URL
                console.log('RasApisService:ngOnInit')
    this.rasRequestorsApi = new RasRequestorsApi();
    this.rasTestclassesApi = new RasTestclassesApi();
  }

  // TODO, needs to be an observable
  public getRasRequestors() :RasRequestorsApi {
    return this.rasRequestorsApi;
  }

  // TODO, needs to be an observable
  public getRasTestclasses() :RasTestclassesApi {
    return this.rasTestclassesApi;
  }
}
