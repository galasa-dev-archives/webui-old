import { Component, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loading-bar-service',
  templateUrl: './loading-bar-service.component.html',
  styleUrls: ['./loading-bar-service.component.css']
})
@Injectable()
export class LoadingBarServiceComponent implements OnInit {

  private originalState = new BehaviorSubject<boolean>(true);
  current = this.originalState.asObservable();

  constructor() { }

  ngOnInit(): void {
  }

  changeState(state : boolean){
    this.originalState.next(state)
  }

}
