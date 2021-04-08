import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RasRunIdRunlogGetRequest } from 'galasa-ras-api-ts-rxjs';
import { RasApisService } from '../../../../core/rasapis.service';

@Component({
  selector: 'app-log-scroller',
  templateUrl: './log-scroller.component.html',
  styleUrls: ['./log-scroller.component.css']
})
export class LogScrollerComponent implements OnInit {

  log: string;
  id: string;

  constructor(private rasApis : RasApisService ,private route: ActivatedRoute) { }

  ngOnInit(): void {

    var idSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    idSub.unsubscribe();

    this.getLog(this.id);
    
  }

 getLog(id: string){
    this.rasApis.getRasRuns().then(
      runsApi =>{
        console.log(runsApi); 
        var parameters: RasRunIdRunlogGetRequest ={"id" : id}
        console.log(runsApi.rasRunIdRunlogGet(parameters));
        runsApi.rasRunIdRunlogGet(parameters).toPromise().then(
          result=> {
            var newResult: string;
            console.log(result);
            if(result != null){
              newResult = result;
            }
            this.log = newResult;
            console.log(newResult)
          }
        ).catch(reason => {
          console.log("Error loading", reason);
        });
      }
    );
  }
}

