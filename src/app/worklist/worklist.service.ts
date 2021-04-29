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
  private subject = new Subject<any>();

  constructor() { 
    this.worklist.push(new WorklistData({"id" : "cdb-c9d898313367805fb5ae84d0376e2461", "runName" : "J12732", "shortName" : "GoldenEagle",
      "result" : "Passed", "testClass" : "bulktest.bristol.cambridge.chester.GoldenEagle"}))
    this.worklist.push(new WorklistData({"id" : "cdb-c9d898313367805fb5ae84d0376e18b7", "runName" : "J12731", "shortName" : "Osprey",
      "result" : "Passed", "testClass" : "bulktest.bristol.cambridge.manchester.Osprey"}))
    this.updateWorklist(this.worklist);
  }

  addToWorklist(id : string){
  // TO-DO
    this.sendEvent();
  }

  removeFromWorklist(id : string){
  // TO-DO
    this.sendEvent();
  }

  updateWorklist(value){
    this.worklistSource.next(value);
  }

  sendEvent() {
    this.subject.next();
  }
  getEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }
}
