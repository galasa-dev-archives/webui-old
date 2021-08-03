/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2021.
 */
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
          },
          reason => {
            console.log("Error retrieving Worklist ", reason);
            document.getElementById("toast-error-getting-worklist").style.visibility = "visible";
          }
        )
      }
    )

    this.worklistSource.next(this.worklist);

  }

  addToWorklist(id : string) : boolean {

    // If Worklist length is about to exceed 20, show Toast Error message
    if (this.worklist.length >= 20){
      document.getElementById("toast-max-worklist-items").style.visibility = "visible";
      return false;
    }
    
    this.worklistApis.getWorklistApi().then(
      worklistApi => {
        worklistApi.addWebuiWorklistRunId(id).toPromise().then(
          output => {
            this.worklist = [];

            for (let worklistItem of output.worklistItems){

              var runId = worklistItem.runId;
              var runName = worklistItem.runName;
              var result = worklistItem.result;
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
            this.updateWorklist();
          }, 
          reason => {
            console.log("Error updating Worklist ", reason);
            document.getElementById("toast-error-updating-worklist").style.visibility = "visible";
            return false;
          }
        )
      }
    )
    return true;
  }

  removeFromWorklist(id : string) : boolean {
 
    this.worklistApis.getWorklistApi().then(
      worklistApi => {
        worklistApi.deleteWebuiWorklistRunId(id).toPromise().then(
          output => {
            this.worklist = [];

            for (let worklistItem of output.worklistItems){

              var runId = worklistItem.runId;
              var runName = worklistItem.runName;
              var result = worklistItem.result;
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
            this.updateWorklist();
          },
          reason => {
            console.log("Error updating Worklist ", reason);
            document.getElementById("toast-error-updating-worklist").style.visibility = "visible";
            return false;
          }
        )
      }
    )
    return true;
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