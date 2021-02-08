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
  
    let options = { year: 'numeric', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    var formattedDateTime = localDateTime.toLocaleString(undefined, options);
    
    return formattedDateTime;
  }

}
