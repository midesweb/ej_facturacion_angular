import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemClienteComponent } from './item-cliente.component';

describe('ItemClienteComponent', () => {
  let component: ItemClienteComponent;
  let fixture: ComponentFixture<ItemClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
