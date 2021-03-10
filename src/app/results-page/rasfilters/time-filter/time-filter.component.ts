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
  invalid : Boolean;
  invalidText : string = "Invalid";
  value : Object[] = [];

  formGroup: FormGroup;

  constructor(protected formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({ single: [[new Date()], Validators.required]});
  }

  ngOnInit(): void {
  }

  changeTime($event){
    console.log("Event: " + $event)
    var value = $event;
    this.isTimeInvalid(value);

    this.valueChange.emit($event);
  }

  isTimeInvalid(value : string){
    var regExp = /[a-zA-Z]/g;
            
    if(regExp.test(value)){
      this.invalid = true;
    } else {
    this.invalid = false;
    }
  }

}
