import { WebsocketService } from './../../services/websocket.service';
import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-grafica",
  templateUrl: "./grafica.component.html",
  styleUrls: ["./grafica.component.css"]
})
export class GraficaComponent implements OnInit {
  public lineChartData: Array<any> = [
    { data: [0, 0, 80, 0, 0, 0, 40], label: "Ventas A" }
  ];
  public lineChartLabels: Array<any> = [ "January", "February", "March", "April", "Mayo", "Junio" ];

  constructor( private http: HttpClient, public websocketService: WebsocketService ) {}

  ngOnInit() {
    this.getData();
    this.escucharSocket();
    /* setInterval(() => {
      const newData =[
        Math.round(Math.random () * 100),
        Math.round(Math.random () * 100),
        Math.round(Math.random () * 100),
        Math.round(Math.random () * 100),
        Math.round(Math.random () * 100)];
        this.lineChartData = [ {data :newData ,label: "Ventas A"}];
    }, 3000); */
  }

  getData(){
    this.http.get('http://localhost:5000/grafica').subscribe( (data: any) =>{
      console.log(data)
      this.lineChartData = data.grafica;
    })
  }

  escucharSocket(){
    this.websocketService.listenner('cambio-grafica').subscribe( (data: any) =>{
      console.log(data);
      this.lineChartData = data.grafica;

    })
  }

}
