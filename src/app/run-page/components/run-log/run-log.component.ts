import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TestStructure } from 'galasa-ras-api-ts-rxjs';
import { HeaderService } from '../../../header/header.service';

@Component({
  selector: 'app-run-log',
  templateUrl: './run-log.component.html',
  styleUrls: ['./run-log.component.css']
})
export class RunLogComponent implements OnInit {
  @Input() testStructure: TestStructure = {};

  constructor(private headerTitleService: HeaderService) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Run test detail / Run log');
  }
  

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.testStructure.runName);
    
  }

}
