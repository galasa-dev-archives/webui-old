import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  placement : string = "right";
  alignment : string = "start";
  organiseTableLabel : string = "Organise table";
  filterTestsLabel : string = "Filter tests";
  compareListLabel : string = "Compare list";
  worklistLabel : string = "Worklist";
  helpLabel : string = "Help";

  constructor(private data: DataServiceComponent) { }

  ngOnInit(): void {
  }
  ngOnDestroy() {
  }

  expandOrganiseTable(){
    // Get current state from data service, as state may have changed if collapse icon was clicked in a different component
    this.data.currentOrganiseState.subscribe(state => this.organiseExpanded = state);
   
    if (this.organiseExpanded == true){
      this.data.changeOrganiseState(false);
      this.event.emit("");
    } else if (this.organiseExpanded == false) {
      this.data.changeOrganiseState(true);
      this.event.emit("organise-table");

      // Reset all other toolbars to closed
      this.data.changeFiltersState(false)
      this.data.changeCompareListState(false)
      this.data.changeWorklistState(false)
      this.data.changeHelpState(false)
    }
  }

  expandTestFilters(){
    this.data.currentFiltersState.subscribe(state => this.filtersExpanded = state);
   
    if (this.filtersExpanded == true){
      this.data.changeFiltersState(false);
      this.event.emit("");
    } else if (this.filtersExpanded == false) {
      this.data.changeFiltersState(true);
      this.event.emit("test-filters");

      this.data.changeOrganiseState(false)
      this.data.changeCompareListState(false)
      this.data.changeWorklistState(false)
      this.data.changeHelpState(false)
    }
  }

  expandCompareList(){
    this.data.currentCompareListState.subscribe(state => this.compareListExpanded = state);
    
    if (this.compareListExpanded == true){
      this.data.changeCompareListState(false);
      this.event.emit("");
    } else {
      this.data.changeCompareListState(true);
      this.event.emit("compare-list");

      this.data.changeOrganiseState(false)
      this.data.changeFiltersState(false)
      this.data.changeWorklistState(false)
      this.data.changeHelpState(false)
    }
  }

  expandWorklist(){
    this.data.currentWorklistState.subscribe(state => this.worklistExpanded = state);

    if (this.worklistExpanded == true){
      this.data.changeWorklistState(false);
      this.event.emit("");
    } else if (this.worklistExpanded == false) {
      this.data.changeWorklistState(true);
      this.event.emit("worklist");

      this.data.changeOrganiseState(false)
      this.data.changeFiltersState(false)
      this.data.changeCompareListState(false)
      this.data.changeHelpState(false)
    }
  }

  expandHelp(){
    this.data.currentHelpState.subscribe(state => this.helpExpanded = state);

    if (this.helpExpanded == true){
      this.data.changeHelpState(false);
      this.event.emit("");
    } else if (this.helpExpanded == false) {
      this.data.changeHelpState(true);
      this.event.emit("help");
     
      this.data.changeOrganiseState(false)
      this.data.changeFiltersState(false)
      this.data.changeCompareListState(false)
      this.data.changeWorklistState(false)
    }
  }

}
