import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TableModel, TableItem, TableHeaderItem, PaginationModel, PaginationModule} from 'carbon-components-angular';

import { RasRunGetRequest } from 'galasa-ras-api-ts-rxjs';

import { RasApisService } from '../../../core/rasapis.service'

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
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
  loading: Boolean = true;
  constructor(private rasApis : RasApisService, private route : ActivatedRoute, private router : Router) { 
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {  this.selectPage(1) }
    });
  }

  ngOnInit(): void {
    
    this.paginationModel.currentPage = 1;

    this.model.data = [];
    this.model.header = [
      new TableHeaderItem({data: "Test Run UUID"}), 
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

  selectPage(page){
      this.paginationModel.currentPage = page;
      this.getPage(page);
  }


  getPage(page){
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
                newData.push([
                  new TableItem({data: run.runName}), 
                  new TableItem({data: run.testName}), 
                  new TableItem({data: run.start}),
                  new TableItem({data: run.end})]);
                newRuns.push(run)
              }
          }else{
            this.paginationModel.totalDataLength = 0;
            }
            this.model.data = newData; 
            this.runs = newRuns;
            this.loading = false;
          }
        ).catch(reason =>{
          console.log("Error loading", reason);
        })
      }
      
    )
  }

}


