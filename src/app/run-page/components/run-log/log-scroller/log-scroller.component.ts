import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BootstrapService } from '../../../../../app/core/bootstrap.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log-scroller',
  templateUrl: './log-scroller.component.html',
  styleUrls: ['./log-scroller.component.css']
})
export class LogScrollerComponent implements OnInit {

  @Input() log: string = "";

  id: string;

  constructor() { }

  ngOnInit(): void {}

}

