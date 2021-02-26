import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TableModel, TableItem, TableHeaderItem, PaginationModel} from 'carbon-components-angular';

import { RasRunGetRequest } from 'galasa-ras-api-ts-rxjs';
import { Subscription } from 'rxjs';
import { LoadingBarServiceComponent } from '../../../loading-bar/loading-bar-service/loading-bar-service.component';

import { RasApisService } from '../../../core/rasapis.service'

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})

export class ResultsTableComponent implements OnInit {

  paginationModel = new PaginationModel();
  model: TableModel = new TableModel();
  itemsPerPageOptions :number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  runs: Object[] = [];
  pageSize: number;
  page: number;
  result: string;
  bundle: string;
  requestor: string;
  testName : string;
  loading: boolean = true;

  state : boolean;
  subscription : Subscription;

  @ViewChild("customLoadingTemplate", { static : true })
  private customLoadingTemplate: TemplateRef<any>;

  @ViewChild("customItemTemplate", { static : false })
  protected customItemTemplate: TemplateRef<any>;

  @ViewChild("customResultTemplate", { static : false })
  protected customResultTemplate: TemplateRef<any>;

  @ViewChild("customDateTemplate", { static : false })
  protected customDateTemplate: TemplateRef<any>;

  constructor(private rasApis : RasApisService, private route : ActivatedRoute, private router : Router, private data : LoadingBarServiceComponent) { 
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {  this.selectPage(1) }
    });
  }

  ngOnInit(): void {

    this.subscription = this.data.current.subscribe(state => this.state = state);
    
    this.paginationModel.currentPage = 1;

    this.model.data = [];
    this.model.header = [
      new TableHeaderItem({data: "Status"}),
      new TableHeaderItem({data: "Test Run"}), 
      new TableHeaderItem({data: "Test Class"}), 
      new TableHeaderItem({data: "Started"}), 
      new TableHeaderItem({data: "Finished"})
    ];
    
    this.route.queryParams.subscribe(params =>{
      this.pageSize = params['pageSize'];
      this.page = params['pageNum'];
      this.requestor = params['requestor'];
      this.testName = params['testclass'];
      this.bundle = params['bundle'];
      this.result = params['resultNames'];
      
    });

    this.selectPage(1);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClick(index: number){
    if(!this.loading){
      this.router.navigate(['/run/' + this.model.data[index][1].data.id]);
    }
  }

  selectPage(page){
      this.paginationModel.currentPage = page;
      this.getPage(page);
  }

  getPage(page){
    this.loading = true;
    var loadingData: TableItem[][] = []
    var row: Object[] = [];
    for (let i = 0; i < 5; i++) {
      loadingData.push([
        new TableItem({template: this.customLoadingTemplate}),
        new TableItem({template: this.customLoadingTemplate}),
        new TableItem({template: this.customLoadingTemplate}),
        new TableItem({template: this.customLoadingTemplate}),
        new TableItem({template: this.customLoadingTemplate}),
      ]);
      row.push(i);
      this.model.data = loadingData;
      this.runs = row;
    }

    this.rasApis.getRasRuns().then(
      runsApi =>{
        var parameters: RasRunGetRequest = {
                                            "sort": "to:desc",
                                            "page": page, 
                                            "size" : this.paginationModel.pageLength,
                                            "testname": this.testName,
                                            "requestor": this.requestor,
                                            "bundle": this.bundle,
                                            "result": this.result
                                            };
        runsApi.rasRunGet(parameters).toPromise().then(
          result => {
            if(result != null){
              var newData: TableItem[][] = []
              var newRuns: Object[] = [];
              this.paginationModel.totalDataLength = result.amountOfRuns;
              for(let run of result.runs){
                var testResult = "";
                if (run.testStructure.result == "EnvFail"){
                  testResult = "Environmental failure";
                } else if (run.testStructure.result == "UNKNOWN") {
                  testResult = "Unknown";
                } else {
                  testResult = run.testStructure.result;
                }
                newData.push([
                  new TableItem({data: testResult, template: this.customResultTemplate}),
                  new TableItem({data: {name: run.testStructure.runName, id: run.runId}, template: this.customItemTemplate}), 
                  new TableItem({data: run.testStructure.testName}), 
                  new TableItem({data: run.testStructure.startTime, template: this.customDateTemplate}),
                  new TableItem({data: run.testStructure.endTime, template: this.customDateTemplate})]);
                newRuns.push(run);
              }
          }else{
            this.paginationModel.totalDataLength = 0;
            }
            setTimeout(() => {this.model.data = newData; this.data.changeState(false);}, 1500);
            this.loading = false;
            this.runs = newRuns;
          }
        ).catch(reason =>{
          console.log("Error loading", reason);
        })
      }
      
    )
  }

}


