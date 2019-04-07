import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { SidebarComponent } from './sidebar.component';
describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  beforeEach(() => {
    const productsServiceStub = {
      favouritedProductsEmmiter: { subscribe: () => ({}) }
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SidebarComponent],
      providers: [{ provide: ProductsService, useValue: productsServiceStub }]
    });
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('favouritesCount defaults to: 0', () => {
    expect(component.favouritesCount).toEqual(0);
  });
});
