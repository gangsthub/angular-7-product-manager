import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductsService } from '@app/core/services/products.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  beforeEach(() => {
    const productsServiceStub = { getProducts: () => ({}) };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomeComponent],
      providers: [{ provide: ProductsService, useValue: productsServiceStub }]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('products defaults to: []', () => {
    expect(component.products).toEqual([]);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const productsServiceStub: ProductsService = fixture.debugElement.injector.get(
        ProductsService
      );
      spyOn(productsServiceStub, 'getProducts');
      component.ngOnInit();
      expect(productsServiceStub.getProducts).toHaveBeenCalled();
    });
  });
});
