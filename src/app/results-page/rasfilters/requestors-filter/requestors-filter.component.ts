import { Component, OnInit } from '@angular/core';
import { ApiHandler } from '../../../../../src/classes/ApiHandler';

@Component({
  selector: 'app-requestors-filter',
  templateUrl: './requestors-filter.component.html',
  styleUrls: ['./requestors-filter.component.scss']
})
export class RequestorsFilterComponent implements OnInit {

  
  items = [
          //  {
          //       content: "Abacus",
          //      selected: false
          //   },
          //  {
          //       content: "Byte",
          //      selected: false,
          //   },
          //  {
          //      content: "Computer",
          //       selected: false
          //   },
          //   {
          //       content: "Digital",
          //       selected: false
          //   }
     ];
     private rasApi = new ApiHandler();
    


  constructor() { 

  }

  ngOnInit() {

   
    
  }

  

}
