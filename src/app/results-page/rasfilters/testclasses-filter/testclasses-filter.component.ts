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
  bundles: Object[]=[];
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
            var newBundles: Object []=[];
            var nextId = 0;
            for (let testClass of result.testclasses) {
              newTestclasses.push({content:testClass.testclass, id:nextId});
              // whitout id so it woudnt be unique elements
              newBundles.push(testClass.bundle);
              nextId++;
            }
            var nextId = 0;
            //put in set to get rid of dublicates
            newBundles=Array.from(new Set(newBundles));
            var bun: Object[]=[];
            //set an id to the elements
            for(let nodub of newBundles){
              //check for null values
              if(nodub!= null){
              bun.push({content:nodub,id:nextId});
              nextId++;
            }
            }
            this.testclasses = newTestclasses;
            this.bundles = bun;
            this.loading = false;
            console.log(this.bundles);
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
    let newparams = Object.assign(Object.assign({},this.route.queryParams),{testclass:selectedTestclass});
    this.router.navigate(['.'],{relativeTo: this.route,queryParams: newparams});
  }

}
