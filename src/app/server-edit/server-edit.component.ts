import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']
})
export class ServerEditComponent {
    
    attivaServersButton: boolean = false;
    serversCreationMessage: string = 'Nessun server è stato creato';
    serverName: string = 'TestServer';
    serverCreated: boolean = false;

    @Output() newServerEvent = new EventEmitter<string>();

    constructor(){
        setTimeout(() => {
          this.attivaServersButton = true;
        }, 2000);
    }

    onClickButton(){
        this.serverCreated = true;
        this.serversCreationMessage = 'Server creato! Il nome è ' +this.serverName;
        this.addNewServer();
    }

    
    onUpdateServerName(event: Event){
        // console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    addNewServer(){
      this.newServerEvent.emit(this.serverName);
    }
}