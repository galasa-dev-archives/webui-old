import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataServiceComponent } from '../data-service/data-service.component';

@Component({
  selector: 'app-worklist-toolbar',
  templateUrl: './worklist-toolbar.component.html',
  styleUrls: ['./worklist-toolbar.component.scss']
})
export class WorklistToolbarComponent implements OnInit {

  @Output() event = new EventEmitter<string>();

  state : boolean;
  subscription : Subscription;

  checked : boolean;

  worklistParamInURL : boolean;

  constructor(private data: DataServiceComponent, private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
    // Worklist toolbar open or closed state
    this.subscription = this.data.currentWorklistState.subscribe(state => this.state = state)

    // Load the checked or unchecked state of the Checkbox based on if worklist=true is in the URL on load
    if (this.route.snapshot.queryParams['worklist'] == 'true'){
      this.checked = true;
    } else {
      this.checked = false;
    }

    // If the URL is updated by another Filter being applied, and worklist=true is removed, update the Checkbox too
    this.route.queryParams.subscribe(params => {
      this.worklistParamInURL = params['worklist'];
      this.updateCheckbox()
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  collapseToolbar(){
    this.event.emit("");
    this.data.changeWorklistState(false);
  }

  onCheck(){
    if (this.checked == false){
      this.checked = true;
      let newparams = Object.assign({worklist:this.checked});
      this.router.navigate(['.'],{relativeTo: this.route,queryParams: newparams});
    } else if (this.checked == true){
      this.checked = false;
      let newparams = Object.assign({});
      this.router.navigate(['.'],{relativeTo: this.route,queryParams: newparams});
    }
  }

  updateCheckbox(){
    if (typeof(this.worklistParamInURL) == 'undefined'){
      this.checked = false;
    }
  }

}
