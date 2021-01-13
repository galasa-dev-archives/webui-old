import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeaComponent, MovementModule } from '@carbon/icons-angular';
import { RasRunIdGetRequest, Run, RunResults, TestMethod, TestStructure } from 'galasa-ras-api-ts-rxjs';
import { RasApisService } from '../../../core/rasapis.service';
import { RasRunGetRequest } from 'galasa-ras-api-ts-rxjs';

@Component({
  selector: 'app-run-overview',
  templateUrl: './run-overview.component.html',
  styleUrls: ['./run-overview.component.css']
})
export class RunOverviewComponent implements OnInit {

   @Input() testStructure: TestStructure = {};
  
  result: string = "";
  runName: string = "";
  testShortName: string = "";
  bundle: string = "";
  testName : string = "";
  requestor: string = "";

  queued : string = "";
  startTime : string = "";
  endTime : string = "";
  duration : string = "";
  
  testMethods : TestMethod[] = [];

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
    this.queued = this.testStructure.queued;
    this.startTime = this.testStructure.startTime;
    this.endTime = this.testStructure.endTime;
    this.duration = this.getRunDuration();

    this.testMethods = this.testStructure.methods;
  }

  getRunDuration(){
    var start = new Date(this.testStructure.startTime);
    var end = new Date(this.testStructure.endTime);
  
    var durationInMilliseconds = end.valueOf() - start.valueOf();

    var hours = durationInMilliseconds / (1000 * 60 * 60);
    var absoluteHours = Math.floor(hours);
    var minutes = (hours - absoluteHours) * 60;
    var absoluteMinutes = Math.floor(minutes);
    var seconds = (minutes - absoluteMinutes) * 60;
    var absoluteSeconds = Math.floor(seconds);
    var milliseconds = Math.floor((seconds - absoluteSeconds) * 1000);

    var hourString = absoluteHours > 0 ? absoluteHours == 1 ? "1 hour" : absoluteHours + " hours" : "";
    var minuteString = absoluteMinutes > 0 ? absoluteMinutes == 1 ? "1 minute" : absoluteMinutes + " minutes" : absoluteHours > 0 && (absoluteSeconds > 0 || milliseconds > 0) ? "0 minutes" : "";
    var secondString = absoluteSeconds > 0 ? absoluteSeconds == 1 ? "1 second" : absoluteSeconds + " seconds" : (absoluteHours > 0 || absoluteMinutes > 0) && milliseconds > 0 ? "0 seconds" : "";
    var millisecondString = durationInMilliseconds < 1000 ? durationInMilliseconds == 1 ? "1 millisecond" : durationInMilliseconds == 0 ? "" : durationInMilliseconds + " milliseconds" :
      milliseconds == 1 ? "1 millisecond" : milliseconds == 0 ? "" : milliseconds + " milliseconds";

    return (" (Duration: " + hourString + " " + minuteString + " " + secondString + " " + millisecondString + ")");
  }

}
