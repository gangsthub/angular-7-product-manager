import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductsService } from '@app/core/services/products.service';
import { FavouritesComponent } from './favourites.component';

describe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FavouritesComponent],
      providers: [ProductsService]
    });
    fixture = TestBed.createComponent(FavouritesComponent);
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
