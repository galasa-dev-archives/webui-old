import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WorklistService } from '../worklist.service';
import { WorklistData } from '../worklistdata';

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.scss']
})
export class WorklistComponent implements OnInit {

  // Worklist to be displayed on panel
  worklist : WorklistData[] = [];

  worklistSubscription : Subscription;

  constructor(private worklistService: WorklistService) { 
  }

  ngOnInit(): void {
    this.worklistSubscription = this.worklistService.getWorklistObservable().subscribe((worklist) => this.worklist = worklist);
  }

  ngOnDestroy() {
    this.worklistSubscription.unsubscribe();
  }

  // getWorklist(){
  //   this.worklistSubscription = this.worklistService.currentWorklist.subscribe(worklist => this.worklist = worklist);
  // }
}
