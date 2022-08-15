import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AuthorizationState } from 'src/app/core/store/authorization/authorization.reducers';
import { authorizationFeatureSelector } from 'src/app/core/store/authorization/authorization.selectors';
import { AppTranslateModule } from '../../../../core/app-translate/app-translate.module';
import { AppState } from '../../../../core/store/app.reducers';
import { loginUserAction } from '../../../../core/store/authorization/authorization.actions';
import { SignInPageComponent } from './sign-in-page.component';

describe('SignInPageComponent', () => {
  let component: SignInPageComponent;
  let fixture: ComponentFixture<SignInPageComponent>;
  let store: MockStore<AppState>;
  let mockAuthorizationSelector: MemoizedSelector<
    object,
    AuthorizationState,
    DefaultProjectorFn<AuthorizationState>
  >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTranslateModule, HttpClientTestingModule],
      declarations: [SignInPageComponent],
      providers: [FormBuilder, provideMockStore()],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    mockAuthorizationSelector = store.overrideSelector(authorizationFeatureSelector, {
      accessToken: 'string',
      formEnabled: true,
      user: null,
    });
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture = TestBed.createComponent(SignInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.inject(MockStore)?.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return disable state where store change', () => {
    expect(component.form.enabled).toEqual(true);
    mockAuthorizationSelector.setResult({
      accessToken: 'string',
      formEnabled: false,
      user: null,
    });

    store.refreshState();
    fixture.detectChanges();
    expect(component.form.enabled).toEqual(false);
  });

  it('should dispatch loginUserAction', () => {
    const obj = { email: 'string0@mail.com', password: 'string', remember: false };

    component.form.patchValue(obj);
    component.onSubmit();
    expect(store.dispatch).toHaveBeenCalledWith(loginUserAction({ ...obj }));
  });

  it('should not dispatch loginUserAction', () => {
    const obj = { email: 'string0@mail.com', password: '', remember: false };

    component.form.patchValue(obj);
    component.onSubmit();
    expect(store.dispatch).not.toHaveBeenCalledWith(loginUserAction({ ...obj }));
  });
});
