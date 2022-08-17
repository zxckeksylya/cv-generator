import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityMenuComponent } from './entity-menu.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';

describe('EntityMenuComponent', () => {
  let component: EntityMenuComponent;
  let fixture: ComponentFixture<EntityMenuComponent>;
  let router: any;
  let spy: jasmine.Spy<any>;

  const routerMock = {
    navigate: (): void => {},
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityMenuComponent],
      imports: [CommonModule],
      providers: [{ provide: Router, useValue: routerMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(EntityMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigate', () => {
    const address: RoutingConstants = RoutingConstants.CREATE;
    component.redirectTo(address);
    expect(spy).toHaveBeenCalled();
  });
});
