import { WebsocketService } from "./websocket.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  constructor(public websocketService: WebsocketService) {}

  sendMessage( mensaje: string ) {
    const payload = {
      de: this.websocketService.getUsuario().nombre,
      cuerpo: mensaje
    };
    this.websocketService.emmit('menssage', payload);
   }

  getMessages(){
    return this.websocketService.listenner( 'messages-new' );
  }
  getMessagesPrivate(){
    return this.websocketService.listenner( 'messages-private' );
  }
  getUsuariosActivos(){
    return this.websocketService.listenner( 'actives-users' );
  }
  emitUsuariosActivos(){
    return this.websocketService.emmit( 'obtener-usuarios' );
  }
}
