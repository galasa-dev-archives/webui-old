import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { WorklistComponent } from './worklist/worklist.component';

@Injectable({
  providedIn: 'root'
})
export class WorklistService {

  worklist = [];

  private worklistSource = new BehaviorSubject('');
  currentWorklist = this.worklistSource.asObservable();

  private subject = new Subject<any>();

  constructor() { }


  sendEvent() {
    this.subject.next();
  }
  getEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }

  updateWorklist(value : string){
    this.worklistSource.next(value);
  }

  addToWorklist(worklistItem){
    if (this.worklist.some(item => item.id == worklistItem.id)){

    } else {
      this.worklist.push(worklistItem);
    }
    this.updateWorklist(JSON.stringify(this.worklist));
    this.sendEvent();
  }

  removeFromWorklist(worklistItem){
    if (this.worklist.some(item => item.id == worklistItem.id)){
      const index = this.worklist.indexOf(worklistItem);
      this.worklist.splice(index, 1);
    } 
    this.updateWorklist(JSON.stringify(this.worklist));
    this.sendEvent();
  }
}
