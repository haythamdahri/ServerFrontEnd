import {Component, EventEmitter, OnInit, Output, ElementRef, ViewChild } from '@angular/core';
import {Server} from '../shared/Server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('SCE') serverCreated = new EventEmitter<Server>();
  @Output('BPCE') blueprintCreated = new EventEmitter<Server>();

  @ViewChild('serverContentInput') serverContent: ElementRef;

  server: Server = new Server('', '', false);

  constructor() { }

  ngOnInit() {
  }

  addServer(serverNameInput: HTMLInputElement) {
    this.server.isBlueprintServer = false;
    this.server.serverName = serverNameInput.value;
    this.server.serverContent = this.serverContent.nativeElement.value;
    this.serverCreated.emit(this.server);
    this.server = new Server('', '', false);
  }


  // addBlueprintServer(serverNameInput: HTMLInputElement) {
  addBlueprintServer() {
    this.server.isBlueprintServer = true;
    this.server.serverName = this.serverContent.nativeElement.value
    this.server.serverContent = this.serverContent.nativeElement.value;
    this.blueprintCreated.emit(this.server);
    this.server = new Server('', '', false);
  }


}

