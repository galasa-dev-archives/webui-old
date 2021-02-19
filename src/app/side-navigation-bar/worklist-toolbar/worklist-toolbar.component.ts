import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceComponent } from '../data-service/data-service.component';

@Component({
  selector: 'app-worklist-toolbar',
  templateUrl: './worklist-toolbar.component.html',
  styleUrls: ['./worklist-toolbar.component.scss']
})
export class WorklistToolbarComponent implements OnInit {

  @Output() event = new EventEmitter<string>();

  state : boolean;
  subscription : Subscription;

  constructor(private data: DataServiceComponent) { }

  ngOnInit(): void {
    this.subscription = this.data.currentWorklistState.subscribe(state => this.state = state)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  collapseToolbar(){
    this.event.emit("");
    this.data.changeWorklistState(false);
  }

}
