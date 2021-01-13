import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css']
})

export class TestResultComponent implements OnInit {

  @Input() value: string;

  iconIsPass : boolean = false;
  iconIsFail : boolean = false;
  iconIsNA : boolean = false;
  iconUnknown : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if (this.value != null){
      if (this.value === "Passed"){
        this.iconIsPass = true;
      }
      else if (this.value === "Failed"){
        this.iconIsFail = true;
      }
      else if (this.value === "NA"){
        this.iconIsNA = true;
      }
      else {
        this.iconUnknown = true;
        console.log("Test result unknown");
      }
    }
    
  }
  
}
