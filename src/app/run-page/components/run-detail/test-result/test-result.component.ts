import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css']
})

export class TestResultComponent implements OnInit {

  @Input() value: string;

  state : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if (this.value != null){
      this.state = this.value.toLowerCase();
    }
    else {
      console.log("Result unknown");
    }
    
  }
  
}
