import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppTranslateModule } from '../../app-translate/app-translate.module';
import { Themes } from '../../enums/themes.enum';
import { AppState } from '../../store/app.reducers';
import { changeThemeAction } from '../../store/theme/theme.actions';
import { ThemeState } from '../../store/theme/theme.reducers';
import { themeFeatureSelector } from '../../store/theme/theme.selectors';
import { ThemeButtonComponent } from './theme-button.component';

describe('ThemeButtonComponent', () => {
  let component: ThemeButtonComponent;
  let fixture: ComponentFixture<ThemeButtonComponent>;
  let store: MockStore<AppState>;
  let mockThemeSelector: MemoizedSelector<object, ThemeState, DefaultProjectorFn<ThemeState>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTranslateModule, HttpClientTestingModule],
      declarations: [ThemeButtonComponent],
      providers: [provideMockStore()],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    mockThemeSelector = store.overrideSelector(themeFeatureSelector, {
      theme: Themes.LIGHT,
    });
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture = TestBed.createComponent(ThemeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.inject(MockStore)?.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setTheme should dispatch changeThemeAction', () => {
    const theme: Themes = Themes.DARK;
    component.setTheme(theme);
    expect(store.dispatch).toHaveBeenCalledWith(changeThemeAction({ theme }));
  });

  it('should update theme when store changes', () => {
    mockThemeSelector.setResult({
      theme: Themes.DARK,
    });

    store.refreshState();
    fixture.detectChanges();

    expect(component.theme).toEqual(Themes.DARK);
  });

  describe('changeTheme', () => {
    it('changeTheme should set theme if current theme not last', () => {
      component.theme = Themes.DARK;
      component.changeTheme();
      expect(store.dispatch).toHaveBeenCalledWith(changeThemeAction({ theme: Themes.LIGHT }));
    });
    it('changeTheme should set theme if current theme last', () => {
      component.theme = Themes.LIGHT;
      component.changeTheme();
      expect(store.dispatch).toHaveBeenCalledWith(changeThemeAction({ theme: Themes.DARK }));
    });
  });
});
