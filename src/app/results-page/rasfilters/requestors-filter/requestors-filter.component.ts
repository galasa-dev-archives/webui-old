/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2020.
 */
import { Component, OnInit }        from '@angular/core';
import { Router, ActivatedRoute, Params}    from '@angular/router';

import { LoadingBarServiceComponent } from '../../../loading-bar/loading-bar-service/loading-bar-service.component';

import { RasApisService } from '../../../core/rasapis.service'
import { Subscription } from 'rxjs';

//
//
// Populate a dropdown box with a list of Requestors in the RAS
//
//

@Component({
  selector: 'app-requestors-filter',
  templateUrl: './requestors-filter.component.html',
  styleUrls: ['./requestors-filter.component.scss']
})
export class RequestorsFilterComponent implements OnInit {

  state : boolean;
  subscription : Subscription;

  requestors:Object[] = []; // Contains an entry content:'Name',id:1 for each entry
  loading: Boolean = true;  // Supposed to disable the dropdown if it is currently being loaded

  constructor(private rasApis: RasApisService, // Get the RAS API Service
              private route: ActivatedRoute,   // Our current route so we can extract the current requestor
              private router: Router,           // So we can update the URL
              private data : LoadingBarServiceComponent
             ) { 

    // TODO set the dropdown value to that of the URL
    //this.route.queryParams.subscribe((params: Params) => this.updateQueryParams(params));
  }

  ngOnInit() {
  this.subscription = this.data.current.subscribe(state => this.state = state);
   // Get the get Requestors api call
    this.rasApis.getRasApi().then(
        requestorsApi => {
              // Issue the call, this will return async
          requestorsApi.getRasRequestors("requestor:asc").toPromise().then(
            result => {
               //  Build the new array before setting the field, so the dropdown gets it in one go
              var newRequestors :Object[] = [];

              var nextId = 0;
               // Go through the response,  NEED TO CHECK if it handles nulls etc
              for(let requestor of result.requestors) {
                newRequestors.push({content: requestor, id: nextId});
                nextId++;
              }

              // Set the field so the dropdown automatically updates and set loading to false so 
              // any progress bar switches off and the dropdown enables 
              this.requestors = newRequestors;

              this.loading = false;
            }
          ).catch(reason => {
            console.log("Error loading ", reason);
            // TODO Need to issue a Toast to indicate a failure, but not found one in Carbon
          })
        }
    )


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // Driven by the dropdown box when an item is selected or deselected
  onSelected(event :any) {
    this.data.changeState(true);
    var selectedRequestor = ""; // Default to an empty value

    if (event.item) { // If present, something has been selected
      selectedRequestor = event.item.content; // Get the name of the requestor
    }

    // Get all existing parameters and add/replace "requestor" to them
    let newparams = Object.assign(Object.assign({}, this.route.snapshot.queryParams), {requestor : selectedRequestor});
    // Dont hardcode the url,  just use "this page" so dropdown can be used on any page
    this.router.navigate(['.'],{relativeTo: this.route, queryParams: newparams});
  }

  

}
