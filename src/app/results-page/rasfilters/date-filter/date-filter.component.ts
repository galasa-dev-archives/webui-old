import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {

  @Output() valueChange = new EventEmitter();

  label : string =  "";
  placeholder : string = "DD/MM/YYYY";
  size : string = "md";
  invalidSingle : boolean;
  invalidText : string = "Invalid";
  dateFormat : string =  "d/m/Y";
  value : Object[] = [];

  formGroup : FormGroup;

  constructor(protected formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({ single: [[new Date()], Validators.required]});
  }

  ngOnInit(): void {
  }

  changeDate($event){
    this.valueChange.emit($event);
    this.isDateInvalid($event);  
  }

  isDateInvalid(value : string){
    if (value.length === 0){
      this.invalidSingle = false; // The box should not say Invalid if it's empty
    } else {
      this.invalidSingle = this.formGroup.controls["single"].invalid && this.formGroup.controls["single"].touched;
    }
  }

  getDateFormat(){
  }

}
