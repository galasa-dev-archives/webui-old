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

  constructor() { }

  addToWorklist(worklistItem : WorklistData){
    if (this.worklist.some(item => item.id == worklistItem.id)){

    } else {
      this.worklist.push(worklistItem);
    }
    this.updateWorklist(this.worklist);
    this.sendEvent();
  }

  removeFromWorklist(worklistItem : WorklistData){
    if (this.worklist.some(item => item.id == worklistItem.id)){
      const index = this.worklist.indexOf(worklistItem);
      this.worklist.splice(index, 1);
    } 
    this.updateWorklist(this.worklist);
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
