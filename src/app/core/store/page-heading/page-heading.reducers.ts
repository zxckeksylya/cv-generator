import { PageHeadingItem } from '../../interfaces/page-heading-item.interface';
import { createReducer, on } from '@ngrx/store';
import { setPageHeadingAction } from './page-heading.actions';

export const PAGE_HEADING_FEATURE_KEY = 'pageHeading';

export interface PageHeadingState {
  pageHeading: PageHeadingItem;
}

export const initialPageHeadingState: PageHeadingState = {
  pageHeading: {
    i18nKeyDescription: '',
    i18nKeySection: '',
  },
};

export const pageHeadingReducer = createReducer(
  initialPageHeadingState,
  on(setPageHeadingAction, (state, action) => ({
    ...state,
    pageHeading: action.pageHeading,
  })),
);
