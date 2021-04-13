import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RasRunIdGetRequest, Run, RunResults, TestMethod, TestStructure } from 'galasa-ras-api-ts-rxjs';
import { RasApisService } from '../core/rasapis.service';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-run-page',
  templateUrl: './run-page.component.html',
  styleUrls: ['./run-page.component.scss']
})
export class RunPageComponent implements OnInit {
  

  id : string;
  testStructure : TestStructure = {};
  loading: boolean;
  activeToolbar: string = "";
  


  constructor(private rasApis : RasApisService, private route : ActivatedRoute,private headerTitleService: HeaderService) { }

  ngOnInit(): void {

    this.headerTitleService.setTitle('Run test detail');

    console.log("this is loading");

    this.loading = true;

    var idSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    idSub.unsubscribe();

    this.rasApis.getRasRuns().then(
      
      runsApi =>{
        var parameters: RasRunIdGetRequest = {
          "id" : this.id
        }

        runsApi.rasRunIdGet(parameters).toPromise().then(
          result => {
            if(result != null){
              var newResult : Run = result;
              this.loading = false;
            }
            this.testStructure = newResult.testStructure;
          }
        ).catch(reason => {
          this.loading = true;
          console.log("Error loading", reason);
        });
      }
    );
    
  }

  expandToolbar($event){
    this.activeToolbar = $event;
  }

  collapseToolbar($event){
    this.activeToolbar = $event;
  }

 
}
