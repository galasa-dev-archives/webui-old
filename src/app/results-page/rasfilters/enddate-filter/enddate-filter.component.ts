/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2021.
 */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-enddate-filter',
  templateUrl: './enddate-filter.component.html',
  styleUrls: ['./enddate-filter.component.css']
})
export class EnddateFilterComponent implements OnInit {

  @Output() valueChange = new EventEmitter();

  label : string =  "";
  placeholder : string = "DD/MM/YYYY";
  size : string = "md";
  invalidText : string = "Invalid";
  dateFormat : string =  "d/m/Y";

  formGroup : FormGroup;

  flatpickrOptions;

  value : Object[] = [];

  constructor(protected formBuilder: FormBuilder, private route : ActivatedRoute) {
    this.formGroup = this.formBuilder.group({ single: [null, Validators.required]});
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      var selectedTo = "";
      if (typeof(params['to']) != 'undefined' && params['to'] != ""){
        selectedTo = params['to'] // Will be in UTC time 
        var selectedToInTimezone = new Date(selectedTo); // Translates it to browser local time
        this.getLocaleDateFormat();
        this.placeholder = "";
        this.value = [];
        this.value.push(selectedToInTimezone)
      } else {
        this.getLocaleDateFormat();
      }
    });

    this.flatpickrOptions = {
      maxDate : new Date(),
      dateFormat : this.dateFormat
    };

  }

  changeDate($event){
    this.valueChange.emit($event);
  }

  get invalidSingle(){
    return this.formGroup.controls["single"].invalid && this.formGroup.controls["single"].touched;
  }

  getLocaleDateFormat() {
    var format;

    let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    var dateString = new Date("1970-02-01T00:00:00.000Z").toLocaleDateString(navigator.languages[0], options);

    if (dateString.indexOf("1970") == 0){
      format = "YYYY/MM/DD";
      this.dateFormat = "Y/m/d";
    } else if (dateString.indexOf("02") == 0){
      format = "MM/DD/YYYY";
      this.dateFormat = "m/d/Y";
    } else {
      format = "DD/MM/YYYY";
    }
    this.placeholder = format;
  }
  
}
