import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  
  breadcrumbItems : Map<string,string>[] = [];
  currentBreadcrumbItem : Map<string,string> ;

  constructor() { }

  ngOnInit(): void {

    var breadcrumbs = new Map();
    
    breadcrumbs.set('landing-page', {breadcrumbName : "Dashboard", url : "/"});
    breadcrumbs.set('results-page', {breadcrumbName: "Previously run tests", url : "/results"});
    breadcrumbs.set('run-page', {breadcrumbName : "Run detail", url : "/"});
    // No path set for Run Page currently as there is no further page you would navigate backwards from

    var currentPage = window.location.href;
    console.log("Current page URL: " + currentPage);

    // All path through the UI will have Dashboard as the first breadcrumb item
    this.breadcrumbItems.push(breadcrumbs.get('landing-page'));

    // Previously run tests pathway ...
    if (currentPage.includes("results")){
      // Set Results Page to current page so it doesn't hyperlink
      this.currentBreadcrumbItem = breadcrumbs.get('results-page');
    }
    else if (currentPage.includes("run")){
      this.breadcrumbItems.push(breadcrumbs.get('results-page'));
      // Set Run Page to current page so it doesn't hyperlink
      this.currentBreadcrumbItem = breadcrumbs.get('run-page');
    }

    console.log(this.currentBreadcrumbItem)

  }

}
