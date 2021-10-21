import { ViewEncapsulation, Component, Input, OnInit, OnChanges,  SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, 
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };
  @Input() name;


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

  ngDoCheck() {
    // console.log('ngDoCheck')
  }

  ngAfterContentInit() {
    console.log('<<<AfterContentInit>>>')
  }

  ngAfterContentChecked() {
    console.log('>>>>AfterContentChecked<<<<<')
  }

  ngAfterViewChecked() {
    console.log('__________________ViewChecked')
  }

  ngAfterViewInit() {
    console.log('ViewInit_______________________')
  }

  ngOnDestroy() {
    console.log('%c xxxxxxxxxxxxxOnDestroyxxxxxxxxxxxxxxxx', 'color: red')
  }

}


