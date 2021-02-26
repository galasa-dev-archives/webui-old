import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingBarServiceComponent } from './loading-bar-service/loading-bar-service.component';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent implements OnInit {

  loading : boolean = true;

  width : number;
  myVar;

  state : boolean;
  subscription : Subscription;

  constructor(private data: LoadingBarServiceComponent) { }

  ngOnInit(): void {
    this.subscription = this.data.current.subscribe(state => this.state = state);
    this.width = 0;
    this.myVar = setInterval(() => {this.loadBar()}, 1);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadBar(){
  this.data.current.subscribe(state => this.loading = state);

    if (this.loading == false){
    clearInterval(this.myVar);
    }
    if (this.width >= 100){
      this.width = 0;
    }
    this.width += 3;
    const elements = Array.from(document.getElementsByClassName("myBar") as HTMLCollectionOf<HTMLElement>);
    elements.forEach((element) => {
      element.style.width = this.width + "px";
    });
  }
}
