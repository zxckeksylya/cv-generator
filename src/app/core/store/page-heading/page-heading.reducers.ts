import { PageHeadingItem } from '../../interfaces/page-heading-item.interface';
import { createReducer, on } from '@ngrx/store';
import { setPageHeadingAction, clearPageHeadingStateAction } from './page-heading.actions';

export const PAGE_HEADING_FEATURE_KEY = 'pageHeading';

export interface PageHeadingState {
  pageHeading: PageHeadingItem;
}

export const initionalPageHeadingState: PageHeadingState = {
  pageHeading: {
    i18nKeyDescription: '',
    i18nKeySection: '',
  },
};

export const pageHeadingReducer = createReducer(
  initionalPageHeadingState,
  on(setPageHeadingAction, (state, action) => ({
    ...state,
    pageHeading: action.pageHeading,
  })),
  on(clearPageHeadingStateAction, () => ({
    ...initionalPageHeadingState,
  })),
);
