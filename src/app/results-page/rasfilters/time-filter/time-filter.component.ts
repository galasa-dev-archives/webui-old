import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-time-filter',
  templateUrl: './time-filter.component.html',
  styleUrls: ['./time-filter.component.css']
})
export class TimeFilterComponent implements OnInit {

  disabled = false;
  invalid = false;
  invalidText : string = "Invalid time format";
  value : Object[] = [];

  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeTime($event){
    this.valueChange.emit($event);
  }

}
