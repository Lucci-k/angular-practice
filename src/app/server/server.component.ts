import { Component } from "@angular/core";



@Component({
  selector: 'app = server',
  //templateURL points to html
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online'
  }
  getServerStatus() {
    return this.serverStatus;
  }
}