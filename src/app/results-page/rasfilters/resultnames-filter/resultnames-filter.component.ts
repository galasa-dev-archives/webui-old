import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    
    this.rasApis.getRasApi().then(
      resultApi =>{
        resultApi.getRasResultNames("resultname:asc").toPromise().then(
          result => {
            var selectedResult = "";
            if (typeof(this.route.snapshot.queryParams['resultNames']) != 'undefined' || this.route.snapshot.queryParams['resultNames'] != ""){
              selectedResult = this.route.snapshot.queryParams['resultNames']
            }
            var newResults: Object []=[];
            var nextId = 0;
            for (let names of result.resultnames ) {
              if (names === "EnvFail"){
                names = "Environmental failure";
              } else if (names === "UNKNOWN"){
                names = "Unknown";
              }
              var selected = false;
              if (names == selectedResult){
                selected = true;
              }
              newResults.push({content:names, id:nextId, selected:selected}); 
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
    let newparams = Object.assign(Object.assign({},this.route.snapshot.queryParams),{resultNames:selectedResultNames, worklist:null});
    this.router.navigate(['.'],{relativeTo:this.route, queryParams:newparams});
  }


}
