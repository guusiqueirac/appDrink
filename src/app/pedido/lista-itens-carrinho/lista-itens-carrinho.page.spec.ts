import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItensCarrinhoPage } from './lista-itens-carrinho.page';

describe('ListaItensCarrinhoPage', () => {
  let component: ListaItensCarrinhoPage;
  let fixture: ComponentFixture<ListaItensCarrinhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaItensCarrinhoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItensCarrinhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
