import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaClienteComponent } from './alta-cliente.component';

describe('AltaClienteComponent', () => {
  let component: AltaClienteComponent;
  let fixture: ComponentFixture<AltaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
