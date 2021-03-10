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

  constructor(private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit() {
    this.getLast8HoursTestHistory();
  }

  expandToolbar($event){
    this.activeToolbar = $event;
  }

  collapseToolbar($event){
    this.activeToolbar = $event;
  }

  getLast8HoursTestHistory(){
    var dateNow, hours, eightHoursAgo, startDate;

    dateNow = new Date();
    hours = dateNow.getHours();
    eightHoursAgo = dateNow.setHours(hours - 8);
    startDate = new Date(eightHoursAgo);

    this.setFromAndTo(startDate);
  }

  setFromAndTo(startDate : Date){
    var dateNow, from, to;

    dateNow = new Date();
    from = startDate.toISOString();
    to = dateNow.toISOString();

    let params = Object.assign(Object.assign({},this.route.snapshot.queryParams),{from:from},{to:to});
    this.router.navigate(['.'],{relativeTo: this.route,queryParams: params});
  }

}
