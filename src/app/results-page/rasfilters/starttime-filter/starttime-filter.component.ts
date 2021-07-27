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

    var selectedFrom = "";
    if (typeof(this.route.snapshot.queryParams['from']) != 'undefined' || this.route.snapshot.queryParams['from'] != ""){
      selectedFrom = this.route.snapshot.queryParams['from']
      selectedFrom = selectedFrom.substring(selectedFrom.indexOf('T')+1, selectedFrom.indexOf('T')+6);
      this.value.push(selectedFrom);
    }

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
