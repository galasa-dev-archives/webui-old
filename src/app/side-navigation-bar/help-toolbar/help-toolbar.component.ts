import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceComponent } from '../data-service/data-service.component';

@Component({
  selector: 'app-help-toolbar',
  templateUrl: './help-toolbar.component.html',
  styleUrls: ['./help-toolbar.component.scss']
})
export class HelpToolbarComponent implements OnInit {

  @Output() event = new EventEmitter<string>();

  state : boolean;
  subscription : Subscription;

  constructor(private data: DataServiceComponent) { }

  ngOnInit(): void {
    this.subscription = this.data.currentHelpState.subscribe(state => this.state = state)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  collapseToolbar(){
    this.event.emit("");
    this.data.changeHelpState(false);
  }

}
