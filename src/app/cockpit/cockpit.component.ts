import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated= new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }



  onAddServer(inputElem: HTMLInputElement) {
    this.serverCreated.emit( {
      serverName: inputElem.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(inputElem: HTMLInputElement) {
    this.blueprintCreated.emit( {
      serverName: inputElem.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

}
