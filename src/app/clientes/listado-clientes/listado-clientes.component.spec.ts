import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoClientesComponent } from './listado-clientes.component';

describe('ListadoClientesComponent', () => {
  let component: ListadoClientesComponent;
  let fixture: ComponentFixture<ListadoClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
