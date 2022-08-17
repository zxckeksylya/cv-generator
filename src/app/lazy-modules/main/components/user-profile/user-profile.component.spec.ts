import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ModalService } from '../../../../core/services/modal.service';
import { UserProfileComponent } from './user-profile.component';
import { AppTranslateModule } from 'src/app/core/app-translate/app-translate.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppState } from '../../../../core/store/app.reducers';
import { authorizationFeatureSelector } from 'src/app/core/store/authorization/authorization.selectors';
import { UserDropdownActions } from '../../enums/user-dropdown-actions.enum';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  let router: any;
  let spy: jasmine.Spy<any>;
  let store: MockStore<AppState>;
  const routerMock = {
    navigate: (): void => {},
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileComponent],
      imports: [AppTranslateModule, HttpClientTestingModule],
      providers: [provideMockStore(), { provide: Router, useValue: routerMock }, ModalService],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    store.overrideSelector(authorizationFeatureSelector, {
      user: {
        skills: [],
        languages: [],
        firstName: '',
        lastName: '',
        email: '',
        institution: '',
        diplomaProfession: '',
        department: '',
        role: { id: 'string', name: 'name' },
        id: 'id',
      },
      accessToken: '',
      formEnabled: false,
    });
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('changeAction', () => {
    it('should logout', () => {
      const action: UserDropdownActions = UserDropdownActions.LOGOUT;
      component.changeAction(action);
      expect(spy).toHaveBeenCalled();
    });
  });
});
