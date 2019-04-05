import { ChatService } from './services/chat.service';
import { OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-socket-client';

  constructor(
    public webSocketService: WebsocketService,
    public chatService:ChatService
    ){}

  ngOnInit(){
    this.chatService.getMessagesPrivate().subscribe( msg =>{
      console.log(msg);
    });
   }

}
