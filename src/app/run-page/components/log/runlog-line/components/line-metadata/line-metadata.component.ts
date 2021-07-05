import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-metadata',
  templateUrl: './line-metadata.component.html',
  styleUrls: ['./line-metadata.component.scss']
})
export class LineMetadataComponent implements OnInit {

  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
