import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProdutoPage } from './item-produto.page';

describe('ItemProdutoPage', () => {
  let component: ItemProdutoPage;
  let fixture: ComponentFixture<ItemProdutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemProdutoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
