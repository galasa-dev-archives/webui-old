import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {

  @Output() valueChange = new EventEmitter();

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

  changeDate($event){
    this.valueChange.emit($event);
  }

}
