import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { AppTranslateModule } from '../../app-translate/app-translate.module';
import { SiderComponent } from './sider.component';

describe('SiderComponent', () => {
  let component: SiderComponent;
  let fixture: ComponentFixture<SiderComponent>;
  let router: any;
  let spy: jasmine.Spy<any>;

  const routerStub = {
    navigate: (): void => {},
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTranslateModule, HttpClientTestingModule],
      declarations: [SiderComponent],
      providers: [{ provide: Router, useValue: routerStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('navigate', () => {
    it('should call navigate to employees', () => {
      component.redirectToEmployees();
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    });
    it('should call navigate to entities', () => {
      component.redirectToEntities();
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    });
    it('should call navigate to projects', () => {
      component.redirectToProjects();
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    });
  });
});
