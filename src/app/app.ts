import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CriarTransferenciaComponent } from './components/criar-transferencia/criar-transferencia';
import { ListarTransferenciasComponent } from './components/listar-transferencias/listar-transferencias';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,             
  imports: [
    RouterOutlet,
    CriarTransferenciaComponent,
    ListarTransferenciasComponent,
    FormsModule,
    CommonModule 
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('front-transferencias');


mostrarLista = true;

atualizarLista() {
  this.mostrarLista = false;
  setTimeout(() => this.mostrarLista = true, 0);
  }
}
