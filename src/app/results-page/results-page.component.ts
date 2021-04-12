/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2020.
 */


import { HeaderService } from '../header/header.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss'],
})

export class ResultsPageComponent implements OnInit {

  activeToolbar: string = "";

  amountOfRows : number;

  constructor(private route: ActivatedRoute, private router: Router,private headerTitleService: HeaderService) {
   }

  ngOnInit() {
    this.getRows();
    this.headerTitleService.setTitle('Test history'); //  changes the header 
  }

  expandToolbar($event){
    this.activeToolbar = $event;
  }

  collapseToolbar($event){
    this.activeToolbar = $event;
  }

  getRows(){
    var pageHeight = document.getElementById("results-page").offsetHeight;
    this.amountOfRows = Math.floor((pageHeight - 288) / 48);
  }

}
