import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppTranslateModule } from '../../app-translate/app-translate.module';
import { AppState } from '../../store/app.reducers';
import { PageHeadingState } from '../../store/page-heading/page-heading.reducers';
import { pageHeadingFeatureSelector } from '../../store/page-heading/page-heading.selctors';
import { PageHeadingComponent } from './page-heading.component';

describe('PageHeadingComponent', () => {
  let component: PageHeadingComponent;
  let fixture: ComponentFixture<PageHeadingComponent>;
  let store: MockStore<AppState>;
  let mockPageHeadingSelector: MemoizedSelector<
    object,
    PageHeadingState,
    DefaultProjectorFn<PageHeadingState>
  >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTranslateModule, HttpClientTestingModule],
      declarations: [PageHeadingComponent],
      providers: [provideMockStore()],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    mockPageHeadingSelector = store.overrideSelector(pageHeadingFeatureSelector, {
      pageHeading: {
        i18nKeyDescription: 'string',
        i18nKeySection: 'string',
      },
    });
    spyOn(store, 'dispatch').and.callFake(() => {});
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.inject(MockStore)?.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the pageHeading when the store changes', () => {
    mockPageHeadingSelector.setResult({
      pageHeading: {
        i18nKeyDescription: 'str',
        i18nKeySection: 'str',
      },
    });

    store.refreshState();
    fixture.detectChanges();

    expect(component.pageHeadingItem).toEqual({
      i18nKeyDescription: 'str',
      i18nKeySection: 'str',
    });
  });
});
