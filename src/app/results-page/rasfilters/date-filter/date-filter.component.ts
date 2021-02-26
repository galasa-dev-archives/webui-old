import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {

  @Output() valueChange = new EventEmitter();

  size : string = "md";
  label : string =  "";
  placeholder : string = "DD/MM/YYYY";
  invalidText : string = "Invalid date format";
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
  }

  get invalidSingle() {
		return this.formGroup.controls["single"].invalid && this.formGroup.controls["single"].touched;
	}

}
