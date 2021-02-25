import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbItems = [];
  currentBreadcrumbItem : string = "" ;

  constructor() { }

  ngOnInit(): void {

    var landingPageBreadcrumb = { 'name' : 'Home', 'url' : '/' };
    var resultsPageBreadcrumb = { 'name' : 'Previously run tests', 'url' : '/results'};
    var runPageBreadcrumb = { 'name' : 'Run detail', 'url' : '/'}; 
    // No path set for Run Page currently as there is no further page you would navigate backwards from

    var currentPage = window.location.href;
    console.log("Current page URL: " + currentPage);

    // All paths through the UI will have Dashboard as the first breadcrumb item
    this.breadcrumbItems.push(landingPageBreadcrumb);

     // Previously run tests pathway ...
     if (currentPage.includes("results")){
      // Set Results Page to current page so it doesn't hyperlink
      this.currentBreadcrumbItem = resultsPageBreadcrumb.name;
    }
    else if (currentPage.includes("run")){
      this.breadcrumbItems.push(resultsPageBreadcrumb);
      // Set Run Page to current page so it doesn't hyperlink
      this.currentBreadcrumbItem = runPageBreadcrumb.name;
    }

  }

}
