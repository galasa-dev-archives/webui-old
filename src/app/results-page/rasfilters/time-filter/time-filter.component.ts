import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  
  constructor() {
  }

  ngOnInit(): void {
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
