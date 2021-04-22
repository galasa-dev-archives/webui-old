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
  subjectSubscription : Subscription;

  // Tooltip styling
  placement : string = "right";
  alignment : string = "start";

  constructor(private worklistService: WorklistService) { 
    this.subjectSubscription = this.worklistService.getEvent().subscribe(() => {this.getWorklist();});
  }

  ngOnInit(): void {
    // Get current Worklist from Worklist service when the panel first opens
    this.worklistSubscription = this.worklistService.currentWorklist.subscribe(worklist => this.worklist = worklist);
    this.getWorklist();
  }

  getWorklist(){
    // Called on updates to the Worklist
    this.worklistSubscription = this.worklistService.currentWorklist.subscribe(worklist => this.worklist = worklist);
  }

  ngOnDestroy() {
    this.worklistSubscription.unsubscribe();
    this.subjectSubscription.unsubscribe();
  }
}
