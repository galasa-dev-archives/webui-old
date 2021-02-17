import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TestStructure } from 'galasa-ras-api-ts-rxjs';
import { HeaderService } from '../../../header/header.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() testStructure: TestStructure = {};

  constructor(private headerTitleService: HeaderService) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Run test detail / History');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.testStructure.runName);
  }

}
