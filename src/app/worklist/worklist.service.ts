import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WorklistapisService } from '../core/worklistapis.service';
import { WorklistData } from './worklistdata';

@Injectable({
  providedIn: 'root'
})
export class WorklistService {

  // Array of Worklist data structures
  worklist : WorklistData[] = [];

  private worklistSource = new BehaviorSubject(this.worklist);

  constructor(private worklistApis : WorklistapisService) { 

    this.worklistApis.getWorklistApi().then(
      worklistApi => {
        worklistApi.getWebuiWorklist().toPromise().then(
          output => {

            for (let worklistItem of output.worklistItems){

              var runId = worklistItem.runId;
              var runName = worklistItem.runName;
              var result = worklistItem.result;
              // Short name and Test class can be undefined if the test didn't finish
              var shortName = null;
              if (worklistItem.shortName !== undefined){
                shortName = worklistItem.shortName;
              }
              var testClass = null;
              if (worklistItem.testClass !== undefined){
                testClass = worklistItem.testClass;
              }

              this.worklist.push(new WorklistData({"id" : runId, "runName" : runName,
                "shortName" : shortName, "result" : result, "testClass" : testClass}));

            }
          }
        )
      }
    )

    this.worklistSource.next(this.worklist);

  }

  addToWorklist(id : string){
    
    this.worklistApis.getWorklistApi().then(
      worklistApi => {
        worklistApi.addWebuiWorklistRunId(id).toPromise().then(
          output => {
            this.worklist = [];

            for (let worklistItem of output.worklistItems){

              var runId = worklistItem.runId;
              var runName = worklistItem.runName;
              var shortName = null;
              var result = worklistItem.result;
              if (worklistItem.shortName !== undefined){
                shortName = worklistItem.shortName;
              }
              var testClass = null;
              if (worklistItem.testClass !== undefined){
                testClass = worklistItem.testClass;
              }

              this.worklist.push(new WorklistData({"id" : runId, "runName" : runName,
                "shortName" : shortName, "result" : result, "testClass" : testClass}));
            }
            this.updateWorklist();
          }
        )
      }
    )
  }

  removeFromWorklist(id : string){
 
    this.worklistApis.getWorklistApi().then(
      worklistApi => {
        worklistApi.deleteWebuiWorklistRunId(id).toPromise().then(
          output => {
            this.worklist = [];

            for (let worklistItem of output.worklistItems){

              var runId = worklistItem.runId;
              var runName = worklistItem.runName;
              var shortName = null;
              var result = worklistItem.result;
              if (worklistItem.shortName !== undefined){
                shortName = worklistItem.shortName;
              }
              var testClass = null;
              if (worklistItem.testClass !== undefined){
                testClass = worklistItem.testClass;
              }

              this.worklist.push(new WorklistData({"id" : runId, "runName" : runName,
                "shortName" : shortName, "result" : result, "testClass" : testClass}));

            }
            this.updateWorklist();
          } 
        )
      }
    )
  }

  getWorklistObservable(){
    return this.worklistSource.asObservable();
  }

  updateWorklist(){
    this.worklistSource.next(this.worklist);
  }

  isRunIdInWorklist(id : string) : boolean {
    if (this.worklist.some(item => item.id == id)){
      return true;
    } else {
      return false;
    }
  }

}