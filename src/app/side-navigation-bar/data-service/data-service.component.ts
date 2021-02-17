import { Component, OnInit, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.css']
})
@Injectable()
export class DataServiceComponent implements OnInit {

  private originalState = new BehaviorSubject<boolean>(false);
  current = this.originalState.asObservable();

  constructor() { }

  changeMessage(state: boolean) {
    this.originalState.next(state)
  }

  ngOnInit(): void {
  }

}
