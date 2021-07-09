import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebUIWorklistAPIService } from '../galasaapi';
import { BootstrapService } from './bootstrap.service';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class WorklistapisService {

  worklistApi : WebUIWorklistAPIService;

  constructor(
              private securityService : SecurityService,
              private bootstrapService : BootstrapService,
              private httpClient : HttpClient 
  ) { }

  public getWorklistApi() : Promise<WebUIWorklistAPIService>{

        if (this.worklistApi != null) {
          return new Promise((resolve, reject) => {
            resolve(this.worklistApi);
          });
        }
    
        return new Promise((resolve, reject) => {
          this.bootstrapService.getRasBase().then(
            rasBase => {
              this.worklistApi = new WebUIWorklistAPIService(this.httpClient, rasBase.toString(), null);
          
              resolve(this.worklistApi);
            }
          )
        });

  }
}
