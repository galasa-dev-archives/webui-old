/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2021.
 */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starttime-filter',
  templateUrl: './starttime-filter.component.html',
  styleUrls: ['./starttime-filter.component.css']
})
export class StarttimeFilterComponent implements OnInit {

  @Output() valueChange = new EventEmitter();

  disabled = false;
  invalid : Boolean;
  invalidText : string = "Invalid";
  value : Object[] = [];
  
  constructor(private route : ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      var selectedFrom = "";
      if (typeof(params['from']) != 'undefined' && params['from'] != ""){
        selectedFrom = params['from'] // UTC time
        var selectedFromInTimezone = new Date(selectedFrom); // Local time
        selectedFrom = selectedFromInTimezone.toLocaleTimeString().substring(0,5);
        this.value = [];
        this.value.push(selectedFrom);
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
