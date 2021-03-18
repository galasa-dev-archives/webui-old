import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RasApisService } from '../../../core/rasapis.service';
import { LoadingBarServiceComponent } from '../../../loading-bar/loading-bar-service/loading-bar-service.component';

@Component({
  selector: 'app-datetime-filter',
  templateUrl: './datetime-filter.component.html',
  styleUrls: ['./datetime-filter.component.scss']
})
export class DatetimeFilterComponent implements OnInit {

  state : boolean;
  subscription : Subscription;

  startDate;
  endDate;
  startTime;
  endTime;

  startDateTime;
  endDateTime;

  loading: Boolean = true;

  constructor(private rasApis: RasApisService,
    private route: ActivatedRoute,
    private router: Router,
    private data : LoadingBarServiceComponent
    ) { }

  ngOnInit(): void {
    this.subscription = this.data.current.subscribe(state => this.state = state);
    this.setDefault24HourTestHistory();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  } 

  setDefault24HourTestHistory(){
    var date, hours, twentyFourHoursAgo;

    date = new Date();
    hours = date.getHours();
    twentyFourHoursAgo = date.setHours(hours - 24);
  
    this.startDate = new Date(twentyFourHoursAgo).setHours(0,0,0);
    this.startTime = "00:00";

    this.endDate = new Date().setHours(0,0,0);
    this.endTime = "00:00";
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
    var date = new Date(this.startDate);
    var [hours,minutes] = this.startTime.split(':');
    var time = (hours * 3600000) + (minutes * 60000);
    this.startDateTime = new Date(date.getTime() + time);

    this.onStartChange(this.startDateTime);
  }

  getEndDateTime(){
    var date = new Date(this.endDate);
    var [hours,minutes] = this.endTime.split(':');
    var time = (hours * 3600000) + (minutes * 60000);
    this.endDateTime = new Date(date.getTime() + time);

    this.onEndChange(this.endDateTime);
  }

  onStartChange(date : Date){
    this.data.changeState(true);
    var startDateTime = date.toISOString();
    let newparams = Object.assign(Object.assign({},this.route.snapshot.queryParams),{from:startDateTime});
    this.router.navigate(['.'],{relativeTo: this.route,queryParams: newparams});
    this.data.changeState(false);
  }

  onEndChange(date : Date){
    this.data.changeState(true);
    var endDateTime = date.toISOString();
    let newparams = Object.assign(Object.assign({},this.route.snapshot.queryParams),{to:endDateTime});
    this.router.navigate(['.'],{relativeTo: this.route,queryParams: newparams});
    this.data.changeState(false);
  }
}
