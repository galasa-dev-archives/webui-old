import { Injectable } from '@angular/core';


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
      // this.rasBaseUri = baseUrl + "/ras";
      this.rasBaseUri = baseUrl ;

      console.log("Galasa Bootstrap URL=" + galasaBootstrap);
      console.log("Galasa Base URL=" + baseUrl);
      console.log("Galasa RAS URL=" + this.rasBaseUri);
  }


  // TODO, needs to be an observable so we can async request the actual bootstrap
  public getRasBase() :Promise<String> { 
    console.log("here", galasaBootstrap);
    return new Promise((resolve, reject) => {
      //TODO will need async code if the bootstrap has not been resolved yet


      resolve(this.rasBaseUri);
    });
  }
}
