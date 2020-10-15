import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RasResultnamesGetRequest } from 'galasa-ras-api-ts-rxjs';
import { RasApisService } from '../../../core/rasapis.service';

@Component({
  selector: 'app-resultnames-filter',
  templateUrl: './resultnames-filter.component.html',
  styleUrls: ['./resultnames-filter.component.css']
})
export class ResultnamesFilterComponent implements OnInit {

  results: Object[]=[];
  loading: Boolean = true;
  constructor(private rasApis: RasApisService,
              private route: ActivatedRoute,
              private router: Router
    ) { }

  ngOnInit(){
    
    this.rasApis.getRasResultnames().then(
      resultApi =>{
        var parameters: RasResultnamesGetRequest = {"sort":"resultname:asc"};
        resultApi.rasResultnamesGet(parameters).toPromise().then(
          result => {
            var newResults: Object []=[];
            var nextId = 0;
            for (let names of result.resultnames ) {

              newResults.push({content:names,id:nextId}); 
              nextId++;
            }
            this.results = newResults;
            this.loading = false;
            
          }
        ).catch(reason=> {
          console.log("Error loading",reason)
        })
      }
    )

  }

  

  onSelected(event: any){
    var selectedResultNames = "";
    if(event.item){
      selectedResultNames = event.item.content;
    }
    let newparams = Object.assign(Object.assign({},this.route.snapshot.queryParams),{resultNames:selectedResultNames});
    this.router.navigate(['.'],{relativeTo: this.route,queryParams: newparams});
  }


}
