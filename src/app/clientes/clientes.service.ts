import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ClientesService {

  private clientes: Cliente[];
  private grupos: Grupo[];
  private clientes$: Subject<Cliente[]> = new Subject<Cliente[]>();

  constructor() {
    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Activos'
      },
      {
        id: 2,
        nombre: 'Inactivos'
      },
      {
        id: 3,
        nombre: 'Deudores'
      },
    ];
    this.clientes = [];
  }

  getGrupos() {
    return this.grupos;
  }

  // Este método ya no lo usaré
  // Ya que nadie va a usar el array de clientes directamente
  // En vez de ello, usaremos el observable.
  // getClientes() {
  //   return this.clientes;
  // }

  getClientes$(): Observable<Cliente[]> {
    return this.clientes$.asObservable();
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
    this.clientes$.next(this.clientes);
  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      cif: '',
      direccion: '',
      grupo: 0
    };
  }

  borrarCliente(cliente: Cliente): void {
    for (let i = 0; i < this.clientes.length; i++) {
      if (cliente === this.clientes[i]) {
        this.clientes.splice(i, 1);
        break;
      }
    }
  }
}
