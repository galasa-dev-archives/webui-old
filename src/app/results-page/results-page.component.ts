/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2020.
 */


import { HeaderService } from '../header/header.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss'],
})

export class ResultsPageComponent implements OnInit {

  activeToolbar: string = "";

  constructor() { }

  ngOnInit() {
  }

  expandToolbar($event){
    this.activeToolbar = $event;
  }

  collapseToolbar($event){
    this.activeToolbar = $event;
  }

}
