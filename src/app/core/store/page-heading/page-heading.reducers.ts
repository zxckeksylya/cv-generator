import { PageHeadingItem } from '../../interfaces/page-heading-item.interface';
import { createReducer, on } from '@ngrx/store';
import { setPageHeading } from './page-heading.actions';

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
  on(setPageHeading, (state, action) => ({
    ...state,
    pageHeading: action.pageHeading,
  })),
);
