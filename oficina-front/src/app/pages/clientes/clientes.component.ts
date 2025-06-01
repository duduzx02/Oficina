import { Component } from '@angular/core';
import { ClienteService, Cliente } from '../../services/cliente.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes.component.html'
})
export class ClientesComponent {
  clientes: Cliente[] = [];
  novoCliente: Cliente = { nome: '', telefone: '', placaVeiculo: '', modeloVeiculo: '' };

  constructor(private clienteService: ClienteService) {
    this.carregarClientes();
  }

  carregarClientes() {
    this.clienteService.getAll().subscribe(data => this.clientes = data);
  }

  salvar() {
    this.clienteService.create(this.novoCliente).subscribe(() => {
      this.novoCliente = { nome: '', telefone: '', placaVeiculo: '', modeloVeiculo: '' };
      this.carregarClientes();
    });
  }

  deletar(id: number) {
    this.clienteService.delete(id).subscribe(() => this.carregarClientes());
  }
}
