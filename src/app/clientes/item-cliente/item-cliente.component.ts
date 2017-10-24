import { Cliente } from './../cliente.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-cliente',
  templateUrl: './item-cliente.component.html',
  styleUrls: ['./item-cliente.component.css']
})
export class ItemClienteComponent implements OnInit {

  @Input()
  cliente: Cliente;

  @Output()
  borrarCliente = new EventEmitter<Cliente>();

  onBorrarCliente() {
    this.borrarCliente.emit(this.cliente);
  }

  constructor() { }

  ngOnInit() {
  }

}
