import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeaComponent, MovementModule } from '@carbon/icons-angular';
import { RasRunIdGetRequest, Run, RunResults, TestStructure } from 'galasa-ras-api-ts-rxjs';
import { RasApisService } from '../../../core/rasapis.service';
import { RasRunGetRequest } from 'galasa-ras-api-ts-rxjs';

@Component({
  selector: 'app-run-overview',
  templateUrl: './run-overview.component.html',
  styleUrls: ['./run-overview.component.css']
})
export class RunOverviewComponent implements OnInit {

  @Input() testStructure: TestStructure;

  result: string = "";
  runName: string = "";
  testShortName: string = "";
  bundle: string = "";
  testName : string = "";
  requestor: string = "";

  queued : string = "";
  startTime : string = "";
  endTime : string = "";
  startToEndTime : string = "";

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    this.result = this.testStructure.result;
    this.runName = this.testStructure.runName;
    this.testShortName = this.testStructure.testShortName;
    this.bundle = this.testStructure.bundle;
    this.testName = this.testStructure.testName;
    this.requestor = this.testStructure.requestor;
    this.queued = this.formatDate(this.testStructure.queued);
    this.startTime = this.formatDate(this.testStructure.startTime);
    this.endTime = this.formatDate(this.testStructure.endTime);
    
  }

  formatDate(attribute : string){
    var [date, time] = attribute.split('T');
    time = time.slice(0, time.indexOf('Z'));
    var dateTime = date + " " + time;
    return dateTime;
  }

}
