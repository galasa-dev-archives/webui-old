import { Component, OnInit } from '@angular/core';
import { Box } from '../../models/Box';

@Component({
  selector: 'app-dashboard-boxes',
  templateUrl: './dashboard-boxes.component.html',
  styleUrls: ['./dashboard-boxes.component.scss']
})
export class DashboardBoxesComponent implements OnInit {
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
