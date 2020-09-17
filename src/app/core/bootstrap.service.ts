import { Injectable } from '@angular/core';


//
// 
// The Galasa bootstrap is an unauthenticated call to find out 
// where all all the APIs and the CPS is located.
// It will also indicate if authentication is needed
// and the mechanism that is used
// 
// 



@Injectable({
  providedIn: 'root'
})
export class BootstrapService {

  // TODO need to retrieve this from the assests folder
  private bootstrapUri :String = "http://127.0.0.1:8080/bootstrap";
  private rasBaseUri: String = "http://127.0.0.1:8080/"

  constructor() { }


  // TODO, needs to be an observable so we can async request the actual bootstrap
  public getRasBase() :String { 
    return this.rasBaseUri;
  }
}
