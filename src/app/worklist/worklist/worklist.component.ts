import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WorklistService } from '../worklist.service';

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.scss']
})
export class WorklistComponent implements OnInit {

  // Worklist to be displayed on panel
  worklist = [];

  worklistSubscription : Subscription;

  subjectSubscription : Subscription;

  worklistAsString : string; // Worklist as a String received from Service (cannot receive an Array)

  // Tooltip styling
  placement : string = "right";
  alignment : string = "start";

  constructor(private worklistService: WorklistService) { 
    this.subjectSubscription = this.worklistService.getEvent().subscribe(()=>{
      this.getWorklist();
      })
  }

  ngOnInit(): void {
    // Get current Worklist from Worklist service when the panel first opens
    this.worklistSubscription = this.worklistService.currentWorklist.subscribe(worklist => this.worklistAsString = worklist);
    this.getWorklist();
  }

  getWorklist(){
    // Called on updates to the Worklist
    this.worklistSubscription = this.worklistService.currentWorklist.subscribe(worklist => this.worklistAsString = worklist);
    this.worklist = JSON.parse(this.worklistAsString);
  }

  ngOnDestroy() {
    this.worklistSubscription.unsubscribe();
    this.subjectSubscription.unsubscribe();
  }
}
