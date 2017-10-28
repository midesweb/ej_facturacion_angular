import { Cliente, Grupo } from './../cliente.model';
import { ClientesService } from './../clientes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit, OnDestroy {

  clientes: Cliente[] = [];
  clientes$: Observable<Cliente[]>;
  clientesSubscription: Subscription;

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientes$ = this.clientesService.getClientes$();
    this.clientesSubscription = this.clientes$.subscribe(clientes => this.clientes = clientes);
  }

  doBorrarCliente(cliente: Cliente) {
    console.log('yeah!', cliente);
    this.clientesService.borrarCliente(cliente);
  }

  ngOnDestroy() {
    this.clientesSubscription.unsubscribe();
  }
}
