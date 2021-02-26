import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-time-filter',
  templateUrl: './time-filter.component.html',
  styleUrls: ['./time-filter.component.css']
})
export class TimeFilterComponent implements OnInit {

  @Output() valueChange = new EventEmitter();

  disabled = false;
  invalid = false;
  invalidText : string = "";
  value : Object[] = [];

  formGroup: FormGroup;

  constructor(protected formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({ single: [[new Date()], Validators.required]});
  }

  ngOnInit(): void {
  }

  changeTime($event){
    this.valueChange.emit($event);
  }

  get invalidSingle() {
		return this.formGroup.controls["single"].invalid && this.formGroup.controls["single"].touched;
	}

}
