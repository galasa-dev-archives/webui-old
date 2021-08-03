import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private worklistService: WorklistService, private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    this.worklistSubscription = this.worklistService.getWorklistObservable().subscribe(
      worklist => {
        this.worklist = worklist;
        // If Worklist becomes empty while in 'Show worklist items only' view, remove from URL and revert to normal Results Table
        if (this.worklist.length == 0){
          let newparams = Object.assign({worklist:null});
          this.router.navigate(['.'],{relativeTo: this.route,queryParams: newparams});
        }
      }
    );
  }

  ngOnDestroy() {
    this.worklistSubscription.unsubscribe();
  }
  
}
