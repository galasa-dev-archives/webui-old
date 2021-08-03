import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-error',
  templateUrl: './toast-error.component.html',
  styleUrls: ['./toast-error.component.scss']
})
export class ToastErrorComponent implements OnInit {

  type : string = "error";
  
  title : string = "Error";

  message : string = "Worklist cannot hold more than 20 runs";

  message2 : string = "Error updating the Worklist";

  message3 : string = "Error retrieving the Worklist"

  constructor() { }

  ngOnInit(): void {
  }

  onClose(){
    document.getElementById("toast-max-worklist-items").style.visibility = "hidden";
    document.getElementById("toast-error-updating-worklist").style.visibility = "hidden";
    document.getElementById("toast-error-getting-worklist").style.visibility = "hidden";
  }

}
