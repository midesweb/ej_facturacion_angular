import { Cliente, Grupo } from './../cliente.model';
import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  clientes$: Observable<Cliente[]>;

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientes$ = this.clientesService.getClientes$();
    this.clientes$.subscribe(clientes => this.clientes = clientes);
  }

  doBorrarCliente(cliente: Cliente) {
    console.log('yeah!', cliente);
    this.clientesService.borrarCliente(cliente);
  }
}
