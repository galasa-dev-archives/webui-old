/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2020.
 */
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

//
// 
// The Galasa bootstrap is an unauthenticated call to find out 
// where all all the APIs and the CPS is located.
// It will also indicate if authentication is needed
// and the mechanism that is used
// 
// 

declare var galasaBootstrap: any;

@Injectable({
  providedIn: 'root'
})
export class BootstrapService {

  private rasBaseUri: String;

  constructor() { 
      // At the moment there is no need retrieve the bootstrap as nothing is used from it.

      // Calculate default baseuri from the bootstrap URI
      var baseUrl :String;
      if (galasaBootstrap.endsWith("/bootstrap")) {
        baseUrl = galasaBootstrap.substr(0, galasaBootstrap.length - 10);
      } else {
        // this is a catch and should never be driven
        baseUrl = galasaBootstrap;
        console.error("Bootstrap url did not end with /bootstrap, using as base URL", galasaBootstrap);
      }

      // TODO, the RAS can't be separated from the API server at the moment,  so going to assume it is relative to the boostrap
      // this.rasBaseUri = baseUrl + "/ras";  In the future, there may be a property on the bootstrap pointing to a different base
      this.rasBaseUri = baseUrl ;

      if (environment.production == false) {
        console.log("Galasa Bootstrap URL=" + galasaBootstrap);
        console.log("Galasa Base URL=" + baseUrl);
        console.log("Galasa RAS Base URL=" + this.rasBaseUri);
      }
  }


  // Return the base URL of the RAS API Server
  public getRasBase() :Promise<String> { 
    return new Promise((resolve, reject) => {
      //TODO will need async code if the bootstrap has not been resolved yet


      resolve(this.rasBaseUri);
    });
  }
}
