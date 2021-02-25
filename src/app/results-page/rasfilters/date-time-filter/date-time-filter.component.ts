import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time-filter',
  templateUrl: './date-time-filter.component.html',
  styleUrls: ['./date-time-filter.component.scss']
})
export class DateTimeFilterComponent implements OnInit {

  size : string = "md";
  label : string = "";
  placeholder : string = "MM/DD/YYYY";
  disabled = false;
  invalid = false;
  invalidText : string = "Invalid date format";
  dateFormat : string =  "m/d/Y";
  value : Object[] = [];
  
	constructor() { }

  ngOnInit(): void {
  }

}
