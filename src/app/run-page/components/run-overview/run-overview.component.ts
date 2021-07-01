import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestMethod, TestStructure } from '../../../galasaapi';

@Component({
  selector: 'app-run-overview',
  templateUrl: './run-overview.component.html',
  styleUrls: ['./run-overview.component.scss']
})
export class RunOverviewComponent implements OnInit {



  @Input() testStructure: TestStructure = {};

  ibmButton:boolean;
  result: string = "";
  runName: string = "";
  testShortName: string = "";
  bundle: string = "";
  testName: string = "";
  requestor: string = "";

  queued: string = "";
  startTime: string = "";
  endTime: string = "";
  duration: string = "";

  testMethods: TestMethod[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges) {
    if (this.testStructure.result == "EnvFail") {
      this.result = "Environmental failure";
    } else if (this.testStructure.result == "UNKNOWN") {
      this.result = "Unknown";
    } else {
      this.result = this.testStructure.result;
    }
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

  getRunDuration() {
    var start = new Date(this.testStructure.startTime);
    var end = new Date(this.testStructure.endTime);

    var durationInMilliseconds = end.valueOf() - start.valueOf();

    var hours = durationInMilliseconds / (1000 * 60 * 60);
    var absoluteHours = Math.floor(hours);
    var minutes = (hours - absoluteHours) * 60;
    var absoluteMinutes = Math.floor(minutes);

    var hourString = absoluteHours > 0 ? absoluteHours == 1 ? "1 hour" : absoluteHours + " hours" : "0 hours";
    var minuteString = absoluteMinutes > 0 ? absoluteMinutes == 1 ? "1 minute" : absoluteMinutes + " minutes" : "0 minutes";

    return (" (Duration: " + hourString + " " + minuteString + ")");
  }

}
