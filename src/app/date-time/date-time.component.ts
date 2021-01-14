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
    var dateTime = new Date(value);
    var dt = dateTime.toString();

    var differenceFromUTC = dt.slice(dt.indexOf("GMT") + 3, dt.indexOf("GMT") + 8);
    var differenceInHours = parseInt(differenceFromUTC.slice(1,3));
    var differenceInMinutes = parseInt(differenceFromUTC.slice(3,5));

    if (differenceFromUTC.charAt(0) == '+'){
      dateTime.setHours(dateTime.getHours() + differenceInHours);
      dateTime.setMinutes(dateTime.getMinutes() + differenceInMinutes);
    }
    else{
      dateTime.setHours(dateTime.getHours() - differenceInHours);
      dateTime.setMinutes(dateTime.getMinutes() - differenceInMinutes);
    }

    return dateTime;
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
