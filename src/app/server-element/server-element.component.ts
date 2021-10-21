import { Component, Input, OnInit, OnChanges, ViewEncapsulation, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };


  constructor() {
    console.log('constructor called!====');
  }

  ngOnChanges(changes: SimpleChanges):void {
    console.log('-------on changes called ------------')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('###ngOnInit called')
  }

}


