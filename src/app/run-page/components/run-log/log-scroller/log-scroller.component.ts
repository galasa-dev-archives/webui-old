import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RasRunIdRunlogGetRequest } from 'galasa-ras-api-ts-rxjs';
import { Observable } from 'rxjs';
import { RasApisService } from '../../../../core/rasapis.service';
import { BootstrapService } from '../../../../../app/core/bootstrap.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log-scroller',
  templateUrl: './log-scroller.component.html',
  styleUrls: ['./log-scroller.component.css']
})
export class LogScrollerComponent implements OnInit {

  log: string;
  id: string;


  constructor(private rasApis : RasApisService ,private route: ActivatedRoute, private bootstrapService: BootstrapService,
    private http: HttpClient) { }

  ngOnInit(): void {

    var idSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    idSub.unsubscribe();

    if(localStorage.getItem(this.id)==null){
      this.getLog(this.id);
    }
    
  }

  getLog(id: string){
    var logContent = document.querySelector('#full-log');
    this.bootstrapService.getRasBase().then(
      rasBase=>{
        var url: string = rasBase.toString();
        return this.http.get(url+'/ras/run/'+`${id}`+'/runlog', {responseType:'text'}).subscribe(result=>{
          localStorage.setItem(this.id, result);
          logContent.textContent = result
        });
      });

  }
}

