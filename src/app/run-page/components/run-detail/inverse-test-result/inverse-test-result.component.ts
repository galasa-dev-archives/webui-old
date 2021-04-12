import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-inverse-test-result',
  templateUrl: './inverse-test-result.component.html',
  styleUrls: ['./inverse-test-result.component.scss']
})
export class InverseTestResultComponent implements OnInit {

  @Input() value: string;

  state : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if (this.value != null){
      this.state = this.value.toLowerCase();
    } else {
      this.state = "unknown";
    }
  }
}
