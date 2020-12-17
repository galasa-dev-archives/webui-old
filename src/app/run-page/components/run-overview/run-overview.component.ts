import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeaComponent } from '@carbon/icons-angular';
import { RasRunIdGetRequest, Run, RunResults, TestStructure } from 'galasa-ras-api-ts-rxjs';
import { RasApisService } from '../../../core/rasapis.service';

@Component({
  selector: 'app-run-overview',
  templateUrl: './run-overview.component.html',
  styleUrls: ['./run-overview.component.css']
})
export class RunOverviewComponent implements OnInit {

  @Input() testStructure: TestStructure;
  changeLog: string[] = [];

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.testStructure.runName);
  }

}
