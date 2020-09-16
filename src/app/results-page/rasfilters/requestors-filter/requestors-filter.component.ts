import { Component, OnInit } from '@angular/core';

import { RasApisService } from '../../../core/rasapis.service'

@Component({
  selector: 'app-requestors-filter',
  templateUrl: './requestors-filter.component.html',
  styleUrls: ['./requestors-filter.component.scss']
})
export class RequestorsFilterComponent implements OnInit {

  requestors:Object[] = [
    { content: "one", id: 0 },
    { content: "two", id: 1 },
    { content: "three", id: 2 },
    { content: "four", id: 3 }];

  constructor(private rasApis: RasApisService) { 
  }

  ngOnInit() {
    console.log("x", this.requestors);
  }

  

}
