import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute}    from '@angular/router';

import { Subscription } from 'rxjs';
import { LoadingBarServiceComponent } from '../../../loading-bar/loading-bar-service/loading-bar-service.component';

import { RasApisService } from '../../../core/rasapis.service'

@Component({
  selector: 'app-testclasses-filter',
  templateUrl: './testclasses-filter.component.html',
  styleUrls: ['./testclasses-filter.component.css']
})
export class TestclassesFilterComponent implements OnInit {

  state : boolean;
  subscription : Subscription;

  testclasses: Object[]=[];
  loading: Boolean = true;
  constructor(private rasApis: RasApisService,
    private route: ActivatedRoute,
    private router: Router,
    private data : LoadingBarServiceComponent
    ) { }

  ngOnInit(): void {
    this.subscription = this.data.current.subscribe(state => this.state = state);

    this.rasApis.getRasApi().then(
      testclassesApi =>{
        testclassesApi.getRasTestclasses("testclasses:asc").toPromise().then(
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSelected(event: any){
    this.data.changeState(true);
    var selectedTestclass = "";
    if(event.item){
      selectedTestclass = event.item.content;
    }

    let newparams = Object.assign(Object.assign({},this.route.snapshot.queryParams),{testclass:selectedTestclass});
    this.router.navigate(['.'],{relativeTo: this.route, queryParams: newparams});
    
  }

}
