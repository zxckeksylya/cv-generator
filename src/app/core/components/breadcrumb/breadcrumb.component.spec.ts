import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppTranslateModule } from '../../app-translate/app-translate.module';
import { AppState } from '../../store/app.reducers';
import { BreadcrumbState } from '../../store/breadcrumb/breadcrumb.reducers';
import { breadcrumbFeatureSelector } from '../../store/breadcrumb/breadcrumb.selctors';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;
  let store: MockStore<AppState>;
  let mockBreadcrumbSelector: MemoizedSelector<
    object,
    BreadcrumbState,
    DefaultProjectorFn<BreadcrumbState>
  >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTranslateModule, HttpClientTestingModule],
      declarations: [BreadcrumbComponent],
      providers: [provideMockStore()],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    mockBreadcrumbSelector = store.overrideSelector(breadcrumbFeatureSelector, {
      breadcrumbs: [
        {
          path: 'string',
          i18nKey: 'string',
        },
      ],
    });
    spyOn(store, 'dispatch').and.callFake(() => {});
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.inject(MockStore)?.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the UI when the store changes', () => {
    mockBreadcrumbSelector.setResult({
      breadcrumbs: [
        {
          path: 'string',
          i18nKey: 'string',
        },
        {
          path: 'string2',
          i18nKey: 'string2',
        },
      ],
    });

    store.refreshState();
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('.item')).length).toBe(2);
  });
});
