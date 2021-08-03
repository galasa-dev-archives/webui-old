import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TableModel, TableItem, TableHeaderItem, PaginationModel} from 'carbon-components-angular';

import { Subscription } from 'rxjs';
import { LoadingBarServiceComponent } from '../../../loading-bar/loading-bar-service/loading-bar-service.component';

import { RasApisService } from '../../../core/rasapis.service'
import { WorklistService } from '../../../worklist/worklist.service';
import { WorklistapisService } from '../../../core/worklistapis.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})

export class ResultsTableComponent implements OnInit {

  @Input() amountOfRows : number;

  paginationModel = new PaginationModel();
  model: TableModel = new TableModel();
  itemsPerPageOptions : number[] = [10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  runs: Object[] = [];

  pageSize: number;
  page: number;
  result: string;
  bundle: string;
  requestor: string;
  testName : string;
  from;
  to;
  sortParam: string = "to:desc";
  worklist: string;

  loading: boolean = true;
  loadingSubscription : Subscription;
  loadingState : boolean;

  worklistSubscription : Subscription;

  rowIndex : number;


  @ViewChild("customLoadingTemplate", { static : true })
  private customLoadingTemplate: TemplateRef<any>;

  @ViewChild("customItemTemplate", { static : false })
  protected customItemTemplate: TemplateRef<any>;

  @ViewChild("customResultTemplate", { static : false })
  protected customResultTemplate: TemplateRef<any>;

  @ViewChild("customDateTemplate", { static : false })
  protected customDateTemplate: TemplateRef<any>;

  @ViewChild("customWorklistTemplate", { static : false })
  protected customWorklistTemplate: TemplateRef<any>;

  constructor(private rasApis : RasApisService, private route : ActivatedRoute, private router : Router, private loadingService : LoadingBarServiceComponent,
    private worklistService : WorklistService, private worklistApis : WorklistapisService) { 
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {  
        this.selectPage(1);
      }
    });
  }

  ngOnInit(): void {

    this.loadingSubscription = this.loadingService.current.subscribe(state => this.loadingState = state);
 
    this.worklistSubscription = this.worklistService.getWorklistObservable().subscribe(() => {
      this.updateCheckboxes();
    });
    
    this.paginationModel.currentPage = 1;

    this.paginationModel.pageLength = this.amountOfRows;
    if (!this.itemsPerPageOptions.includes(this.amountOfRows)){
      this.itemsPerPageOptions.push(this.amountOfRows);
    }
    this.itemsPerPageOptions.sort((a, b) => a - b);

    this.model.data = [];
    this.model.header = [
      new TableHeaderItem({data: "Result"}),
      new TableHeaderItem({data: "Run Name" , sortable: false}),
      new TableHeaderItem({data: "Test Class"}), 
      new TableHeaderItem({data: "Started" , sortable: false}), 
      new TableHeaderItem({data: "Finished"}),
      new TableHeaderItem({data: "+ Worklist", sortable: false})
    ];
    
    this.route.queryParams.subscribe(params => {
      this.pageSize = params['pageSize'];
      this.page = params['pageNum'];
      this.requestor = params['requestor'];
      this.testName = params['testclass'];
      this.bundle = params['bundle'];
      this.result = params['resultNames'];
      this.from = params['from'];
      this.to = params['to']; 
      this.worklist = params['worklist'];
    });

    this.selectPage(1);

  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
    this.worklistSubscription.unsubscribe();
  }

  sort(index: number) {
    
    let header = this.model.header[index];
    let filterType = header.data;

    if (filterType == "Finished"){
      if (header.ascending == true){
        header.descending = true;
        this.sortParam = "to:desc"
      } else {
        header.ascending = true;
        this.sortParam = "to:asc"
      }
    }

    if (filterType === "Test Class"){
      if (header.ascending == true){
        header.descending = true;
        this.sortParam = "testclass:desc"
      } else {
        header.ascending = true;
        this.sortParam = "testclass:asc"
      }
      
    }

    if (filterType === "Result"){
      if (header.ascending == true){
        header.descending = true;
        this.sortParam = "result:desc"
      } else {
        header.ascending = true;
        this.sortParam = "result:asc"
    }
    }

    var sort = this.sortParam;

    let newParams = Object.assign(Object.assign({}, this.route.snapshot.queryParams), {sort});
		this.router.navigate(['.'],{relativeTo: this.route,queryParams: newParams});
}

  selectPage(page){
      this.paginationModel.currentPage = page;
      this.getPage(page);
  }

  getPage(page){

    // API has changed to no longer require a Date object, but this may change back in future
    // if (this.from != null){
    //   this.from = new Date(this.from);
    // }
    // if (this.to != null){
    //   this.to = new Date(this.to);
    // } 

    // To insert custom Loading bars into the Table 
    this.loading = true;
    this.loadingService.changeState(true);
    var loadingData: TableItem[][] = []
    var row: Object[] = [];
    for (let i = 0; i < 5; i++) {
      loadingData.push([
        new TableItem({template: this.customLoadingTemplate}),
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

    // If Worklist parameter in the URL is true,
    // send the Run IDs in the Worklist to the API and display these runs in the table only
    var runIdParam = "";
    if (this.worklist == "true"){
      this.worklistApis.getWorklistApi().then(
        worklistApi => {
          worklistApi.getWebuiWorklist().toPromise().then(
            output => {
              for (let worklistItem of output.worklistItems){
                runIdParam = runIdParam.concat(worklistItem.runId + ","); 
              }
              this.loadRunsIntoTable(page, runIdParam);
            }
          )
        }
      )
    // If Worklist parameter is false, load the table with usual filters etc
    } else {
      this.loadRunsIntoTable(page, runIdParam);
    }
  }

  loadRunsIntoTable(page, runIdParam){

    this.rasApis.getRasApi().then(
      runsApi =>{
        runsApi.getRasSearchRuns(this.sortParam,
                                 this.result,
                                 this.bundle,
                                 this.requestor,
                                 this.from,
                                 this.to,
                                 this.testName,
                                 page,
                                 this.paginationModel.pageLength,
                                 runIdParam).toPromise().then(
          result => {
            if (result != null){
              var newData: TableItem[][] = []
              var newRuns: Object[] = [];
              this.paginationModel.totalDataLength = result.amountOfRuns;

              for (let run of result.runs){

                var testResult = "";
                if (run.testStructure.result == "EnvFail"){
                  testResult = "Environmental failure";
                } else if (run.testStructure.result == "UNKNOWN") {
                  testResult = "Unknown";
                } else {
                  testResult = run.testStructure.result;
                }

                var isWorklist : boolean = false;
                isWorklist = this.worklistService.isRunIdInWorklist(run.runId);

                newData.push([
                  new TableItem({data: {name: testResult, link: "../run/" + run.runId}, template: this.customResultTemplate}),
                  new TableItem({data: {name: run.testStructure.runName, id: run.runId, link: "../run/" + run.runId}, template: this.customItemTemplate}), 
                  new TableItem({data: {name: run.testStructure.testName, link: "../run/" + run.runId}, template: this.customItemTemplate}), 
                  new TableItem({data: {name: run.testStructure.startTime, link: "../run/" + run.runId}, template: this.customDateTemplate}),
                  new TableItem({data: {name: run.testStructure.endTime, link: "../run/" + run.runId}, template: this.customDateTemplate}),
                  new TableItem({data: {checked: isWorklist}, template: this.customWorklistTemplate})
                ]);
                newRuns.push(run);

              }
          } else {
            this.paginationModel.totalDataLength = 0;
          }

          if (page === 1) {
            setTimeout(() => {this.model.data = newData; this.loadingService.changeState(false);}, 1000);
          } else {
            this.model.data = newData; this.loadingService.changeState(false);
          }
          this.loading = false;
          this.runs = newRuns;
          }
        ).catch(reason => {
          console.log("Error loading ", reason);
        })
      }
    )
  }

  onChange(index : number){
    this.rowIndex = index;
  }

  onCheck() {
    var index = this.rowIndex;

    var runId = this.model.data[index][1].data.id;
    var isWorklist = this.model.data[index][5].data.checked;
    if (isWorklist == null){
      this.model.data[index][5].data.checked = false;
    }

    var successfulUpdate;
    if (isWorklist == false || isWorklist == null){
      successfulUpdate = this.worklistService.addToWorklist(runId);
    } else if (isWorklist == true) {
      successfulUpdate = this.worklistService.removeFromWorklist(runId);
    }

    if (successfulUpdate == true){
      if (this.model.data[index][5].data.checked == false || this.model.data[index][5].data.checked == null){
        this.model.data[index][5].data.checked = true;
      } else if (this.model.data[index][5].data.checked == true){
        this.model.data[index][5].data.checked = false;
      }
    } else if (successfulUpdate == false){
      if (this.model.data[index][5].data.checked == false){
        setTimeout(() => {this.model.data[index][5].data.checked = false}, 100);
        this.model.data[index][5].data.checked = null;
      } else if (this.model.data[index][5].data.checked == true){
        setTimeout(() => {this.model.data[index][5].data.checked = true}, 100);
      }
    }
	}

  updateCheckboxes(){
    for (let index = 0; index < this.model.totalDataLength; index++){
      var runId = this.model.data[index][1].data.id;
      var inWorklist = this.worklistService.isRunIdInWorklist(runId);
      if (typeof(this.model.data[index][5].data.checked) !== 'undefined'){
        if (inWorklist == true){
          this.model.data[index][5].data.checked = inWorklist;
        } else if (inWorklist == false){
          this.model.data[index][5].data.checked = null;
          // this.model.data[index][5].data.checked = false;
        }
      }    
    }
  }

}


