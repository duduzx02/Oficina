import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.service';

export interface Peca {
  id?: number;
  nome: string;
  nivelUrgencia: string;
  observacoes: string;
  clienteId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class PecaService {
  private apiUrl = 'http://localhost:8080/api/pecas';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Peca[]> {
    return this.http.get<Peca[]>(this.apiUrl);
  }

  create(peca: Peca, clienteId: number): Observable<Peca> {
    return this.http.post<Peca>(`${this.apiUrl}/${clienteId}`, peca);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
