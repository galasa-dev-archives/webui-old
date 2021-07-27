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
  selector: 'app-startdate-filter',
  templateUrl: './startdate-filter.component.html',
  styleUrls: ['./startdate-filter.component.css']
})
export class StartdateFilterComponent implements OnInit {

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

    var selectedFrom = "";
    if (typeof(this.route.snapshot.queryParams['from']) != 'undefined' || this.route.snapshot.queryParams['from'] != ""){
      selectedFrom = this.route.snapshot.queryParams['from']
      selectedFrom = selectedFrom.substring(0,selectedFrom.indexOf('T'));
      this.getLocaleDateFormat();
      this.placeholder = "";
      this.value.push(new Date(selectedFrom))
    } else {
      this.getLocaleDateFormat();
    }

    this.flatpickrOptions = {
      maxDate : new Date(),
      dateFormat : this.dateFormat,
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
