import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TestStructure } from 'galasa-ras-api-ts-rxjs';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {

  @Input() value : string;

  dateTime : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    this.dateTime = this.formatDate(this.value);
  }

  formatDate(value : string){
    var localDateTime = new Date(value);
    var local = localDateTime.toString();

    var year = localDateTime.getFullYear();
    var month = localDateTime.getMonth() + 1; // January is 0
    var date = localDateTime.getDate();
    var time = local.slice(local.indexOf(year.toString()) + 5, local.indexOf(" GMT"));

    var timeMillis = value.slice(value.indexOf('.'), value.indexOf('Z'));
    
    return (year + "-" + month + "-" + date + " " + time + timeMillis);
  }

}
