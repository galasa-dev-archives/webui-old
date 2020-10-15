import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute}    from '@angular/router';

import { RasTestclassesGetRequest, TestClasses, TestClass } from 'galasa-ras-api-ts-rxjs';

import { RasApisService } from '../../../core/rasapis.service'

@Component({
  selector: 'app-testclasses-filter',
  templateUrl: './testclasses-filter.component.html',
  styleUrls: ['./testclasses-filter.component.css']
})
export class TestclassesFilterComponent implements OnInit {

  testclasses: Object[]=[];
  loading: Boolean = true;
  constructor(private rasApis: RasApisService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.rasApis.getRasTestclasses().then(
      testclassesApi =>{
        var parameters: RasTestclassesGetRequest = {"sort":"testclasses:asc"};
        testclassesApi.rasTestclassesGet(parameters).toPromise().then(
          result => {
            var newTestclasses : Object[]=[];
            var nextId = 0;
            for (let testClass of result.testclasses) {
              newTestclasses.push({content:testClass.testclass, id:nextId});
              nextId++;
            }
            
            this.testclasses = newTestclasses;
            this.loading = false;
          }
        ).catch(reason=> {
          console.log("Error loading",reason)
        })
      }
    )
  }


  onSelected(event: any){
    var selectedTestclass = "";
    if(event.item){
      selectedTestclass = event.item.content;
    }

    let newparams = Object.assign(Object.assign({},this.route.snapshot.queryParams),{testclass:selectedTestclass});
    this.router.navigate(['.'],{relativeTo: this.route, queryParams: newparams});
    
  }

}
