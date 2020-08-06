import { Component, OnInit } from '@angular/core';
import { Box } from '../../models/Box';

@Component({
  selector: 'galasa-dashboard-box',
  templateUrl: './dashboard-box.component.html',
  styleUrls: ['./dashboard-box.component.scss']
})
export class DashboardBoxComponent implements OnInit {
  boxes:Box[];
  constructor() { }

  ngOnInit() {
    this.boxes = [
      {
        title: "View past results",
        description: "Lorem ipsum",
        imagesrc: "src/assets/icons/icon-144x144.png"
      },
      {
        title: "View systems data",
        description: "Lorem ipsum",
        imagesrc: "src/assets/icons/icon-144x144.png"
      },
      {
        title: "Configure system",
        description: "Lorem ipsum",
        imagesrc: "src/assets/icons/icon-144x144.png"
      },
      {
        title: "Submit tests",
        description: "Lorem ipsum",
        imagesrc: "src/assets/icons/icon-144x144.png"
      }
    ]
  }

}
