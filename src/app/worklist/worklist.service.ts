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
    this.worklist.push(new WorklistData({"id" : "cdb-c9d898313367805fb5ae84d037248e02", "runName" : "J12204", "shortName" : "GoldenEagle",
      "result" : "Passed", "testClass" : "bulktest.bristol.cambridge.chester.GoldenEagle"}))
    this.worklist.push(new WorklistData({"id" : "cdb-c9d898313367805fb5ae84d03724803c", "runName" : "J12203", "shortName" : "Osprey",
      "result" : "Passed", "testClass" : "bulktest.bristol.cambridge.manchester.Osprey"}))
    this.worklist.push(new WorklistData({"id" : "cdb-4d9edc22002429c9c9c6e9eb90847edf", "runName" : "J10994", "shortName" : "Osprey",
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
