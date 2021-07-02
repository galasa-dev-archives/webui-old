/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2020.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
         
import { Configuration, ConfigurationParameters, ResultArchiveStoreAPIService} from '../galasaapi';
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

  rasApi: ResultArchiveStoreAPIService;

  constructor(private securityService :SecurityService, // So we can get the necessary security information
              private bootstrapService :BootstrapService,
              private httpClient :HttpClient ) {  // So we can get the BASE URL
  }

  // TODO, needs to be an observable
  public getRasApi() :Promise<ResultArchiveStoreAPIService> {

    // If we have already resolved the URI, dont do it again

    if (this.rasApi != null) {
      return new Promise((resolve, reject) => {
        resolve(this.rasApi);
      });
    }

    // Need to resolve the ras uri and return the api
    return new Promise((resolve, reject) => {
      this.bootstrapService.getRasBase().then(
        rasBase => {
          this.rasApi = new ResultArchiveStoreAPIService(this.httpClient, rasBase.toString(), null);
      
          resolve(this.rasApi);
        }
      )
    });
  }

}
