import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No new server created!'
  serverName = 'Testing serverName'
  username = 'TheCheeseBurger'
  serverCreated = false

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true
    this.serverCreationStatus = `The server \"${this.serverName}\" was created!`
  }

  onUpdateServername(event: Event) {
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value
  }

  onClearUsername() {
    this.username = ''
  }
}
