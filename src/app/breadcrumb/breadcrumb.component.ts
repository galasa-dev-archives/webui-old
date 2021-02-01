import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  
  breadcrumbItems : Map<string,string>[] = [];

  isCurrent : boolean = false;

  constructor() { }

  ngOnInit(): void {

    var breadcrumbs = new Map();
    
    breadcrumbs.set('landing-page', {breadcrumbName : "Dashboard", url : "/", id: "1"});
    breadcrumbs.set('results-page', {breadcrumbName: "Previously run tests", url : "/results", id : "2"});
    breadcrumbs.set('run-page', {breadcrumbName : "Run detail", url : "/run", id : "3"});

    var currentPage = window.location.href;
    console.log("URL: " + currentPage);

    // All paths will have Dashboard as the first breadcrumb item
    this.breadcrumbItems.push(breadcrumbs.get('landing-page'));

    // Previously run tests pathway ...
    if (currentPage.includes("results")){
      this.breadcrumbItems.push(breadcrumbs.get('results-page'));
    }
    else if (currentPage.includes("run")){
      this.breadcrumbItems.push(breadcrumbs.get('results-page'));
      this.breadcrumbItems.push(breadcrumbs.get('run-page'));
    }

    // Debug message
    console.log(this.breadcrumbItems);

    // CPS properties pathway ...
  
  

  }

}
