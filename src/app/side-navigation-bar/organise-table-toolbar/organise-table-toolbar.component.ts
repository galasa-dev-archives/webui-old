import { Component, EventEmitter, Host, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceComponent } from '../data-service/data-service.component';

@Component({
  selector: 'app-organise-table-toolbar',
  templateUrl: './organise-table-toolbar.component.html',
  styleUrls: ['./organise-table-toolbar.component.scss']
})
export class OrganiseTableToolbarComponent implements OnInit {

  @Output() event = new EventEmitter<string>();

  state : boolean;
  subscription : Subscription;

  constructor(private data: DataServiceComponent) { }

  ngOnInit(): void {
    this.subscription = this.data.currentOrganiseState.subscribe(state => this.state = state)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  collapseToolbar(){
    this.event.emit("");
    this.data.changeOrganiseState(false);
  }

}
