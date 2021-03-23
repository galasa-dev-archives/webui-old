import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TestStructure } from 'galasa-ras-api-ts-rxjs';

@Component({
  selector: 'app-log-search',
  templateUrl: './log-search.component.html',
  styleUrls: ['./log-search.component.scss']
})
export class LogSearchComponent implements OnInit {
  @Input() testStructure: TestStructure = {};

  ibmButton: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.testStructure.runName);
  }

}
