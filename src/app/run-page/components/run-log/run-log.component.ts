import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TestStructure } from 'galasa-ras-api-ts-rxjs';

@Component({
  selector: 'app-run-log',
  templateUrl: './run-log.component.html',
  styleUrls: ['./run-log.component.css']
})
export class RunLogComponent implements OnInit {
  @Input() testStructure: TestStructure;

  constructor() { }

  ngOnInit(): void {
   
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.testStructure.runName);
  }

}
