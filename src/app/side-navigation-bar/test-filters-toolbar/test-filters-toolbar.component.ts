import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  constructor(private data: DataServiceComponent) { }

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

}
