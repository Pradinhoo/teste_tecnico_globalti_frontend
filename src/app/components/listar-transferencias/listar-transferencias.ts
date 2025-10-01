import { Component, OnInit } from '@angular/core';
import { TransferenciaService, Transferencia } from '../../services/transferencia';
import { CommonModule, NgIf, NgFor, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-listar-transferencias',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe
  ],
  templateUrl: './listar-transferencias.html',
  styleUrls: ['./listar-transferencias.css']
})
export class ListarTransferenciasComponent implements OnInit {

  transferencias: Transferencia[] = [];
  carregando: boolean = true;
  erro: string = '';

  constructor(private transferenciaService: TransferenciaService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.carregando = true;
    this.transferenciaService.getTransferencias().subscribe({
      next: (dados) => {
        this.transferencias = dados;
        this.carregando = false;
      },
      error: (err) => {
        this.erro = 'Erro ao carregar transferências';
        console.error(err);
        this.carregando = false;
      }
    });
  }
}
