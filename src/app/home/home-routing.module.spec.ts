import { TestBed } from '@angular/core/testing';
import { HomeRoutingModule } from './home-routing.module';
describe('HomeRoutingModule', () => {
  let module: HomeRoutingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HomeRoutingModule] });
    module = TestBed.get(HomeRoutingModule);
  });
  it('can load instance', () => {
    expect(module).toBeTruthy();
  });
});
