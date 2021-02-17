/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2020.
 */

import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { OrganiseTableToolbarComponent } from '../side-navigation-bar/organise-table-toolbar/organise-table-toolbar.component';
import { TestFiltersToolbarComponent } from '../side-navigation-bar/test-filters-toolbar/test-filters-toolbar.component';


@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss'],
})

export class ResultsPageComponent implements OnInit {

  activeToolbar: string = "";

  organiseExpanded : boolean = false;
  filtersExpanded : boolean = false;
  compareListExpanded : boolean = false;
  worklistExpanded : boolean = false;
  helpExpanded : boolean = false;


  increaseContrastChecked : boolean = false;
  colours : string = "";

  constructor(private headerTitleService: HeaderService) { }

  ngOnInit() {

    this.headerTitleService.setTitle('Previously run tests');

  }

  collapseToolbar($event){
    this.activeToolbar = $event;
    
    if (this.organiseExpanded){
      this.organiseExpanded = false;
    } else if (this.filtersExpanded) {
      this.filtersExpanded = false;
    } else if (this.compareListExpanded){
      this.compareListExpanded = false;
    } else if (this.worklistExpanded){
      this.worklistExpanded = false;
    } else if (this.helpExpanded){
      this.helpExpanded = false;
    }

  }

  expandOrganiseTable() {
    if (this.organiseExpanded == true) {
      this.organiseExpanded = false;
      this.activeToolbar = "";
    } else {
      this.organiseExpanded = true;
      this.activeToolbar = "organise-table";
    }
  }

  expandTestFilters() {
    if (this.filtersExpanded == true) {
      this.filtersExpanded = false;
      this.activeToolbar = "";
    } else {
      this.filtersExpanded = true;
      this.activeToolbar = "test-filters";
    }
  }

  expandCompareList(){
    if (this.compareListExpanded == true){
      this.compareListExpanded = false;
      this.activeToolbar = "";
    } else {
      this.compareListExpanded = true;
      this.activeToolbar = "compare-list";
    }
  }

  expandWorklist(){
    if (this.worklistExpanded == true){
      this.worklistExpanded = false;
      this.activeToolbar = "";
    } else {
      this.worklistExpanded = true;
      this.activeToolbar = "worklist";
    }
  }

  expandHelp(){
    if (this.helpExpanded == true){
      this.helpExpanded = false;
      this.activeToolbar = "";
    } else {
      this.helpExpanded = true;
      this.activeToolbar = "help";
    }
  }

  increaseContrast(){
    if (this.increaseContrastChecked == true){
      this.increaseContrastChecked = false;
      this.colours = "";
    } else {
      this.increaseContrastChecked = true;
      this.colours = "increase contrast";
    }
  }

}
