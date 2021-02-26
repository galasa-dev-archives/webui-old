import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataServiceComponent } from '../data-service/data-service.component';

@Component({
  selector: 'app-test-filters-toolbar',
  templateUrl: './test-filters-toolbar.component.html',
  styleUrls: ['./test-filters-toolbar.component.scss']
})
export class TestFiltersToolbarComponent implements OnInit {

  @Output() event = new EventEmitter<string>();

  state : boolean;
  subscription : Subscription;

  startDate;
  endDate;
  startTime;
  endTime;

  startDateTime;
  endDateTime;

  constructor(private data: DataServiceComponent, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.data.currentFiltersState.subscribe(state => this.state = state)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  collapseToolbar(){
    this.event.emit("");
    this.data.changeFiltersState(false);
  }

  startDateChange($event){
    this.startDate = $event;
    this.getStartDateTime();
  }
  startTimeChange($event){
    this.startTime = $event;
    this.getStartDateTime();
  }
  endDateChange($event){
    this.endDate = $event;
    this.getEndDateTime();
  }
  endTimeChange($event){
    this.endTime = $event;
    this.getEndDateTime();
  }

  getStartDateTime(){
    var startDateTime;

    if (this.startDate != null){
      var date = new Date(this.startDate);
       // Remove if statements when default values added
      if (this.startTime != null){
      var [hours,minutes] = this.startTime.split(':');
      var time = (hours * 3600000) + (minutes * 60000);
      startDateTime = new Date(date.getTime() + time);
    } else {
      startDateTime = new Date(date.getTime());
    }
    console.log("Start date time: " + new Date(startDateTime));
    } else {
      startDateTime = "Invalid start date time";
    }
  }

  getEndDateTime(){
    var endDateTime;

    if (this.endDate != null){
      var date = new Date(this.endDate);  
      
      if (this.endTime != null){
        var [hours,minutes] = this.endTime.split(':');
        var time = (hours * 3600000) + (minutes * 60000);
        endDateTime = new Date(date.getTime() + time);
      } else {
        endDateTime = new Date(date.getTime());
      }
      console.log("End date time: " + new Date(endDateTime));
    } else {
      endDateTime = "Invalid end date time";
    }

  }

}
