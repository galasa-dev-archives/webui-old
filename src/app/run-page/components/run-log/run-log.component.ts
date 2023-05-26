/*
 * Copyright contributors to the Galasa project
 */
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TestStructure } from '../../../galasaapi';
import { BootstrapService } from '../../../../app/core/bootstrap.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-run-log',
  templateUrl: './run-log.component.html',
  styleUrls: ['./run-log.component.scss']
})
export class RunLogComponent implements OnInit {
  @Input() testStructure: TestStructure = {};

  runlog: string;
  id: string;

  constructor(private bootstrapService: BootstrapService, private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {

    var idSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    
    idSub.unsubscribe();

    this.runlog = localStorage.getItem(this.id);

  }
  
  ngOnChanges(changes: SimpleChanges) {
    if(this.runlog == null){
      this.getLog(this.id);
    }
  }

  getLog(id: string){
    this.bootstrapService.getRasBase().then(
      rasBase=>{
        var url: string = rasBase.toString();
        this.http.get(url+'/ras/runs/'+`${id}`+'/runlog', {responseType:'text'}).subscribe(result=>{
          localStorage.setItem(this.id, result);
          this.runlog = localStorage.getItem(this.id);
        });
      });
  }


}
