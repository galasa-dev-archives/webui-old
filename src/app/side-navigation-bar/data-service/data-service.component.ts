import { Component, OnInit, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.css']
})
@Injectable()
export class DataServiceComponent implements OnInit {

  private organiseState = new BehaviorSubject<boolean>(false);
  currentOrganiseState = this.organiseState.asObservable();

  private filtersState = new BehaviorSubject<boolean>(false);
  currentFiltersState = this.filtersState.asObservable();

  private compareListState = new BehaviorSubject<boolean>(false);
  currentCompareListState = this.compareListState.asObservable();

  private worklistState = new BehaviorSubject<boolean>(false);
  currentWorklistState = this.worklistState.asObservable();

  private helpState = new BehaviorSubject<boolean>(false);
  currentHelpState = this.helpState.asObservable();


  constructor() { }

  changeOrganiseState(state : boolean){
    this.organiseState.next(state)
  }

  changeFiltersState(state : boolean){
    this.filtersState.next(state)
  }

  changeCompareListState(state : boolean){
    this.compareListState.next(state)
  }

  changeWorklistState(state : boolean){
    this.worklistState.next(state)
  }

  changeHelpState(state : boolean){
    this.helpState.next(state)
  }

  ngOnInit(): void {
  }

}
