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

  private worklistSource = new BehaviorSubject(null);
  currentWorklist = this.worklistSource.asObservable();

  constructor() { 
    // Temporary hard coded Worklist
    this.worklist.push(new WorklistData({"id" : "cdb-c9d898313367805fb5ae84d0376e2461", "runName" : "J12732", "shortName" : "GoldenEagle",
      "result" : "Passed", "testClass" : "bulktest.bristol.cambridge.chester.GoldenEagle"}))
    this.worklist.push(new WorklistData({"id" : "cdb-c9d898313367805fb5ae84d0376e18b7", "runName" : "J12731", "shortName" : "Osprey",
      "result" : "Passed", "testClass" : "bulktest.bristol.cambridge.manchester.Osprey"}))
    this.worklistSource.next(this.worklist);
  }

  isRunIdInWorklist(id : string) : boolean {
    if (this.worklist.some(item => item.id == id)){
      return true;
    } else {
      return false;
    }
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
  
}