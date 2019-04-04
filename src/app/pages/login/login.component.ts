import { WebsocketService } from "src/app/services/websocket.service";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  nombre = "";
  constructor(public websocketService: WebsocketService,
    public router: Router) {}

  ngOnInit() {}

  ingresar() {
    this.websocketService.loginWs(this.nombre).then(()=>{
      this.router.navigateByUrl('mensajes');
    });
  }
}
