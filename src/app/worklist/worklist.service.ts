import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { WorklistData } from './worklistdata';

@Injectable({
  providedIn: 'root'
})
export class WorklistService {

  // Array of Worklist data structures
  worklist : WorklistData[] = [];

  private worklistSource = new BehaviorSubject(this.worklist);

  constructor() { 
    // Temporary hard coded Worklist
    this.worklist.push(new WorklistData({"id" : "cdb-c56c9f5586d1fb0d985759ff7f002429", "runName" : "J13840", "shortName" : "GoldenEagle",
      "result" : "Passed", "testClass" : "bulktest.bristol.cambridge.chester.GoldenEagle"}))
    this.worklist.push(new WorklistData({"id" : "cdb-c56c9f5586d1fb0d985759ff7f00166e", "runName" : "J13839", "shortName" : "Osprey",
      "result" : "Passed", "testClass" : "bulktest.bristol.cambridge.manchester.Osprey"}))
    this.worklistSource.next(this.worklist);

  }

  getWorklistObservable(){
    return this.worklistSource.asObservable();
  }

  addToWorklist(id : string){
    // TO-DO Logic to get Short name, Run name and Result from API using the ID, add to Worklist
    this.updateWorklist();
  }

  removeFromWorklist(id : string){
    // TO-DO Logic to get Short name, Run name and Result from API using the ID, remove from Worklist
    this.updateWorklist();
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