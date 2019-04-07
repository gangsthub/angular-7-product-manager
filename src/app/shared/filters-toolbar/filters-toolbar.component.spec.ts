import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { FiltersToolbarComponent } from './filters-toolbar.component';

describe('FiltersToolbarComponent', () => {
  let component: FiltersToolbarComponent;
  let fixture: ComponentFixture<FiltersToolbarComponent>;
  beforeEach(() => {
    const matSelectChangeStub = { value: {} };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FiltersToolbarComponent],
      providers: [{ provide: MatSelectChange, useValue: matSelectChangeStub }]
    });
    fixture = TestBed.createComponent(FiltersToolbarComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('orderOptions defaults to: [Objects]', () => {
    expect(component.orderOptions).toEqual([
      { type: 'title', display: 'Title' },
      { type: 'description', display: 'Description' },
      { type: 'email', display: 'E-mail' },
      { type: 'price', display: 'Price' }
    ]);
  });
});
