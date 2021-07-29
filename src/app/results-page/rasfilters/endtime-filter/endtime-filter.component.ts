/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2021.
 */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-endtime-filter',
  templateUrl: './endtime-filter.component.html',
  styleUrls: ['./endtime-filter.component.css']
})
export class EndtimeFilterComponent implements OnInit {

  @Output() valueChange = new EventEmitter();

  disabled = false;
  invalid : Boolean;
  invalidText : string = "Invalid";
  value : Object[] = [];
  
  constructor(private route : ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      var selectedTo = "";
      if (typeof(params['to']) != 'undefined' && params['to'] != ""){
        selectedTo = params['to'] // UTC time
        var selectedToInTimezone = new Date(selectedTo); // Local time
        selectedTo = selectedToInTimezone.toLocaleTimeString().substring(0,5);
        this.value = [];
        this.value.push(selectedTo);
      }
    });

  }

  changeTime($event){
    this.isTimeInvalid($event);
    if (this.invalid == false){
      this.valueChange.emit($event);
    }
  }

  isTimeInvalid(value : string){
    var regExp = /[a-zA-Z]/g;    
    if (regExp.test(value)){
      this.invalid = true;
      this.value = []; // Clear box when it is Invalid value
    } else if (parseInt(value.substring(0,2)) > 23 || parseInt(value.substring(0,2)) < 0){
      this.invalid = true;
      this.value = [];
    } else if (parseInt(value.substring(3)) > 59 || parseInt(value.substring(3)) < 0){
      this.invalid = true;
      this.value = [];
    } else if (value.length < 5){
      this.invalid = true;
      this.value = [];
    }
    else {
    this.invalid = false;
    }
  }

}
