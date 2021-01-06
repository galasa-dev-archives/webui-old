import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeaComponent } from '@carbon/icons-angular';
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

  attributes = [];

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {

    let result = this.testStructure.result;
    let runName = this.testStructure.runName;
    let testShortName = this.testStructure.testShortName;
    let bundle = this.testStructure.bundle;
    let testName = this.testStructure.testName;
    let requestor = this.testStructure.requestor;
    let queued = this.testStructure.queued;
    let startTime = this.testStructure.startTime;
    let endTime = this.testStructure.endTime;
   
  }

  ngOnChanges(changes: SimpleChanges) {

    // Populate Array with JSON objects with key and value
    for (var key in this.testStructure){
      if (key != "status" && key != "methods"){

        var newObject = {
          "key" : key,
          "value" : this.testStructure[key]
        }

        this.attributes.push(newObject);
      }
    }

    // Debug message
    for (var x of this.attributes){
      console.log("Key: " + x.key + " Value: " + x.value);
    }
  }
}
