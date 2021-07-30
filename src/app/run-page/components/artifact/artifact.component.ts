/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2021.
 */
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TestStructure } from '../../../galasaapi';

@Component({
  selector: 'app-artifact',
  templateUrl: './artifact.component.html',
  styleUrls: ['./artifact.component.scss']
})
export class ArtifactComponent implements OnInit {
  @Input() testStructure: TestStructure = {};

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {
  }

}
