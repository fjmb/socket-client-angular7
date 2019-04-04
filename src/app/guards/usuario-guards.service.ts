import { WebsocketService } from './../services/websocket.service';
import { Injectable } from "@angular/core";
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class UsuarioGuardsService implements CanActivate {


  constructor(public websocketService: WebsocketService, public router: Router) {}

  canActivate() {
    if(this.websocketService.getUsuario()){
      return true;
    }else{
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
