import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciaService, Transferencia } from '../../services/transferencia';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-criar-transferencia',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './criar-transferencia.html',
  styleUrls: ['./criar-transferencia.css']
})
export class CriarTransferenciaComponent {

  @Output() transferenciaCriada = new EventEmitter<void>();

  sucesso: string = '';
  erro: string = '';

  constructor(private transferenciaService: TransferenciaService) { }

  criar(form: NgForm) {
    if (form.invalid) {
      this.erro = 'Preencha todos os campos corretamente.';
      this.sucesso = '';
      return;
    }

    const novaTransferencia: Transferencia = {
      contaOrigem: form.value.contaOrigem,
      contaDestino: form.value.contaDestino,
      valor: form.value.valor,
      dataDaTransferencia: form.value.dataDaTransferencia,
      dataDeAgendamento: form.value.dataDeAgendamento
    };

    this.transferenciaService.criarTransferencia(novaTransferencia).subscribe({
      next: (res) => {
        this.sucesso = 'Transferência criada com sucesso!';
        this.erro = '';
        form.reset();

        this.transferenciaCriada.emit();
      },
      error: (err) => {
        this.erro = 'Erro ao criar transferência.';
        this.sucesso = '';
        console.error(err);
      }
    });
  }
}
