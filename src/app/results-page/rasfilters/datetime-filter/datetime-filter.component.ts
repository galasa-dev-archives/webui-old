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

  bundles: Object[]=[];
  loading: Boolean = true;
  constructor(private rasApis: RasApisService,
    private route: ActivatedRoute,
    private router: Router,
    private data : LoadingBarServiceComponent
    ) { }

  ngOnInit(): void {
    this.subscription = this.data.current.subscribe(state => this.state = state);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
    var startDateTime : Date;
    if (this.startDate != null){
      var date = new Date(this.startDate);
       // Remove if statements when default values added
      if (this.startTime != null){
      var [hours,minutes] = this.startTime.split(':');
      var time = (hours * 3600000) + (minutes * 60000);
      startDateTime = new Date(date.getTime() + time);
      // startDateTime = startDateTime.toISOString();
    } else {
      startDateTime = new Date(date.getTime());
      // startDateTime = startDateTime.toISOString();
    }
    } 
    // else {
    //   startDateTime = "";
    // }
    this.onStartChange(startDateTime);
  }

  getEndDateTime(){
    var endDateTime : Date;
    if (this.endDate != null){
      var date = new Date(this.endDate);  
      if (this.endTime != null){
        var [hours,minutes] = this.endTime.split(':');
        var time = (hours * 3600000) + (minutes * 60000);
        endDateTime = new Date(date.getTime() + time);
        // endDateTime = endDateTime.toISOString();
      } else {
        endDateTime = new Date(date.getTime());
        // endDateTime = endDateTime.toISOString();
      }
    } 
    // else {
    //   endDateTime = "";
    // }
    this.onEndChange(endDateTime);
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
