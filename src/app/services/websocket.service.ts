import { Usuario } from "./../modelos/usuario";
import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";


@Injectable({
  providedIn: "root"
})
export class WebsocketService {
  public socketStatus = false;
  public usuario: Usuario;

  constructor(private socket: Socket) {
    this.verifyStatus();
    this.cargarStorage();

  }

  verifyStatus() {
    this.socket.on("connect", () => {
      console.log("Conectado con el servidor");

      this.socketStatus = true;
    });
    this.socket.on("disconnect", () => {
      console.log("Desconectado del servidor");
      this.socketStatus = false;
    });
  }

  emmit(event: string, payload?: any, callback?: Function) {
    this.socket.emit(event, payload, callback);
  }

  listenner(event: string) {
    return this.socket.fromEvent(event);
  }

  loginWs(nombre: string) {

    return new Promise( (resolve  , reject)=>{
      this.emmit('configurar-usuario',{ nombre }, resp => {
        console.log(resp);
        this.usuario = new Usuario( nombre );
        this.guardarStorage();
        resolve();
      });
    })
    //console.log("Configurando", nombre);

  /*   this.socket.emit("configurar-usuario", { nombre }, resp => {
      console.log(resp);
    }); */
  }

getUsuario(){
  return this.usuario;
}
guardarStorage(){
  localStorage.setItem('usuario', JSON.stringify(this.usuario))
}

cargarStorage(){
  if( localStorage.getItem('usuario')){
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.loginWs( this.usuario.nombre);

  }
}



}
