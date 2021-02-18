import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataServiceComponent } from '../data-service/data-service.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-prev-run-tests-sidebar',
  templateUrl: './prev-run-tests-sidebar.component.html',
  styleUrls: ['./prev-run-tests-sidebar.component.scss']
})
export class PrevRunTestsSidebarComponent implements OnInit {

  @Output() event = new EventEmitter<string>();
  
  organiseExpanded : boolean = false;
  filtersExpanded : boolean = false;
  compareListExpanded : boolean = false;
  worklistExpanded : boolean = false;
  helpExpanded : boolean = false;

  state : boolean;
  subscription : Subscription;

  constructor(private data: DataServiceComponent) { }

  ngOnInit(): void {
    this.subscription = this.data.current.subscribe(state => this.state = state)
    console.log("Jade " + this.subscription[0])
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  expandOrganiseTable(){
    this.data.current.subscribe(state => this.organiseExpanded = state);
    if (this.organiseExpanded == true){
      this.organiseExpanded = false;
      this.data.changeMessage(false);
      this.event.emit("");
    } else {
      this.organiseExpanded = true;
      this.data.changeMessage(true);
      this.event.emit("organise-table");
    }
  }

  expandTestFilters(){
    this.data.current.subscribe(state => this.filtersExpanded = state);
    if (this.filtersExpanded == true){
      this.filtersExpanded = false;
      this.data.changeMessage(false);
      this.event.emit("");
    } else {
      this.filtersExpanded = true;
      this.data.changeMessage(true);
      this.event.emit("test-filters");
    }
  }

  expandCompareList(){
    this.data.current.subscribe(state => this.compareListExpanded = state);
    if (this.compareListExpanded == true){
      this.compareListExpanded = false;
      this.data.changeMessage(false);
      this.event.emit("");
    } else {
      this.compareListExpanded = true;
      this.data.changeMessage(true);
      this.event.emit("compare-list");
    }
  }

  expandWorklist(){
    this.data.current.subscribe(state => this.worklistExpanded = state);
    if (this.worklistExpanded == true){
      this.worklistExpanded = false;
      this.data.changeMessage(false);
      this.event.emit("");
    } else {
      this.worklistExpanded = true;
      this.data.changeMessage(true);
      this.event.emit("worklist");
    }
  }

  expandHelp(){
    this.data.current.subscribe(state => this.helpExpanded = state);
    if (this.helpExpanded == true){
      this.helpExpanded = false;
      this.data.changeMessage(false);
      this.event.emit("");
    } else {
      this.helpExpanded = true;
      this.data.changeMessage(true);
      this.event.emit("help");
    }
  }

}
