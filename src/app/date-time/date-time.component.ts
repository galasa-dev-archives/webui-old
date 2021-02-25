import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TestStructure } from 'galasa-ras-api-ts-rxjs';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent implements OnInit {

  @Input() value : string;

  dateTime : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    this.dateTime = this.getLocalDateTime(this.value);
  }

  getLocalDateTime(value : string){
    var localDateTime = new Date(value);
    var today = new Date();
    var todayCopy = new Date();
    var yesterday = new Date(todayCopy.setDate(todayCopy.getDate() - 1));

    var dateTimeString = localDateTime.toString().substring(0,localDateTime.toString().indexOf(":") - 2);
    var todayString = today.toString().substring(0,today.toString().indexOf(":") - 2)
    var yesterdayString = yesterday.toString().substring(0,yesterday.toString().indexOf(":") - 2)

    var formattedDateTime = "";
    if (dateTimeString == todayString){
      let options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
      formattedDateTime = "Today, " + localDateTime.toLocaleString(undefined, options);
    } else if (dateTimeString == yesterdayString){
      let options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
      formattedDateTime = "Yesterday, " + localDateTime.toLocaleString(undefined, options);
    } else {
      let options = { year: 'numeric', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      formattedDateTime = localDateTime.toLocaleString(undefined, options);
    }
    
    return formattedDateTime;
  }

}
