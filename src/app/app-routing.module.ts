import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { GraficaComponent } from './components/grafica/grafica.component';
import { UsuarioGuardsService } from './guards/usuario-guards.service';
import { MensajesComponent } from "./pages/mensajes/mensajes.component";
import { LoginComponent } from "./pages/login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRouts: Routes = [
  { path: '', component: LoginComponent },
  { path: 'mensajes', component: MensajesComponent, canActivate:[UsuarioGuardsService]},
  { path: 'graficas', component: GraficaComponent},
  { path: 'encuestas', component: EncuestaComponent},
  { path: '**', component: LoginComponent }

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRouts)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {}
