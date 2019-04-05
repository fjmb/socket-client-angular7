import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  public encuestaData: Array<any> = [  { data: [ 65, 59, 80, 81 ], label: "Entrevistados" }];
  public encuestaLabels: Array<any> = [ 'Pregunta 1', 'Pregunta 2', 'Pregunta 4', 'Pregunta 4' ];
  public barChartOptions: any = {     scaleShowVerticalLines: false,     responsive: true};

  public barChartType: ChartType = 'bar';


  constructor( private http: HttpClient, public websocketService: WebsocketService ) {}

  ngOnInit() {
    this.getData();
    this.escucharSocket();
  }

  getData(){
    this.http.get('http://localhost:5000/encuesta').subscribe( (data: any) =>{
      console.log(data)
      this.encuestaData = data.encuesta;
    })
  }

  escucharSocket(){
    this.websocketService.listenner('grafica-encuesta').subscribe( (data: any) =>{
      console.log(data);
      this.encuestaData = data.encuesta;

    })
  }

}
