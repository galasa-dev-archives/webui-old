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
    var localDateTime = this.getLocalDateTime(this.value);
    this.dateTime = this.formatDate(localDateTime);
  }

  getLocalDateTime(value : string){
    var localDateTime = new Date(value);
    return localDateTime;
  }

  formatDate(localDateTime : Date){
    var dateTime = localDateTime.toString();

    var year = localDateTime.getFullYear();
    var month = localDateTime.getMonth() + 1; // January is 0
    var date = localDateTime.getDate();
    var time = dateTime.slice(dateTime.indexOf(year.toString()) + 5, dateTime.indexOf(" GMT"));
    
    return (year + "-" + month + "-" + date + " " + time);
  }

}
