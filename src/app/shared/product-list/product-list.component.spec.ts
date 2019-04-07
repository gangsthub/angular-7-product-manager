import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProductListComponent]
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('products defaults to: []', () => {
    expect(component.products).toEqual([]);
  });
  it('searchEnabled defaults to: true', () => {
    expect(component.searchEnabled).toEqual(true);
  });
  it('displayedProducts defaults to: []', () => {
    expect(component.displayedProducts).toEqual([]);
  });
});
