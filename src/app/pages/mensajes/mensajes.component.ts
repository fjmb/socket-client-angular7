import { WebsocketService } from './../../services/websocket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  constructor( public websocketService: WebsocketService) { }

  ngOnInit() {
  }

  cerrarSesion(){
    this.websocketService.logoutWs();
  }
}
