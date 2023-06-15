import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  servers = ['Server1', 'Server2', 'Server3'];

  addNewServer(newServer: string){
    console.log(newServer);
    let nameServer = newServer;
    this.servers.push(nameServer);
  }
}
