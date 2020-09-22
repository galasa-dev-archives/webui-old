import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute}    from '@angular/router';

import { RasTestclassesGetRequest, TestClasses, TestClass } from 'galasa-ras-api-ts-rxjs';

import { RasApisService } from '../../../core/rasapis.service'

@Component({
  selector: 'app-bundle-filter',
  templateUrl: './bundle-filter.component.html',
  styleUrls: ['./bundle-filter.component.css']
})
export class BundleFilterComponent implements OnInit {

  bundles: Object[]=[];
  loading: Boolean = true;
  constructor(private rasApis: RasApisService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.rasApis.getRasTestclasses().then(
      bundleApi =>{
        var parameters: RasTestclassesGetRequest = {"sort":"testclasses:asc"};
        bundleApi.rasTestclassesGet(parameters).toPromise().then(
          result => {
            var newBundles: Object []=[];
            for (let bun of result.testclasses) {
              // whitout id so it woudnt be unique elements
              newBundles.push(bun.bundle);
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
            this.bundles = bun;
            this.loading = false;
          }
        ).catch(reason=> {
          console.log("Error loading",reason)
        })
      }
    )

  }

  

  onSelected(event: any){
    var selectedBundles = "";
    if(event.item){
      selectedBundles = event.item.content;
    }
    let newparams = Object.assign(Object.assign({},this.route.queryParams),{bundle:selectedBundles});
    this.router.navigate(['.'],{relativeTo: this.route,queryParams: newparams});
  }

}
