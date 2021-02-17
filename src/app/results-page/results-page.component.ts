/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2020.
 */
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss'],
})

export class ResultsPageComponent implements OnInit {

  activeToolbar: string = "";

  organiseExpanded: boolean = false;
  filtersExpanded: boolean = false;


  constructor(private headerTitleService: HeaderService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('Previously run tests');
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

}
