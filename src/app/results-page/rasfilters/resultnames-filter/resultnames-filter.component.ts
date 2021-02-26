import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RasResultnamesGetRequest } from 'galasa-ras-api-ts-rxjs';
import { Subscription } from 'rxjs';
import { RasApisService } from '../../../core/rasapis.service';
import { LoadingBarServiceComponent } from '../../../loading-bar/loading-bar-service/loading-bar-service.component';

@Component({
  selector: 'app-resultnames-filter',
  templateUrl: './resultnames-filter.component.html',
  styleUrls: ['./resultnames-filter.component.css']
})
export class ResultnamesFilterComponent implements OnInit {

  state : boolean;
  subscription : Subscription;

  results: Object[]=[];
  loading: Boolean = true;
  constructor(private rasApis: RasApisService,
              private route: ActivatedRoute,
              private router: Router,
              private data : LoadingBarServiceComponent
    ) { }

  ngOnInit(){
    this.subscription = this.data.current.subscribe(state => this.state = state);
    
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }  

  onSelected(event: any){
    this.data.changeState(true);
    var selectedResultNames = "";
    if(event.item){
      selectedResultNames = event.item.content;
    }
    let newparams = Object.assign(Object.assign({},this.route.snapshot.queryParams),{resultNames:selectedResultNames});
    this.router.navigate(['.'],{relativeTo: this.route,queryParams: newparams});
  }


}
