import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transferencia {
  contaOrigem: string;
  contaDestino: string;
  valor: number;
  dataDaTransferencia?: string; 
  dataDeAgendamento?: string;   
  valorTaxa?: number;           
}

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private baseUrl = 'http://localhost:8080/transferencia';

  constructor(private http: HttpClient) { }

  getTransferencias(): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(this.baseUrl);
  }

  criarTransferencia(transferencia: Transferencia): Observable<Transferencia> {
    return this.http.post<Transferencia>(this.baseUrl, transferencia);
  }
}
