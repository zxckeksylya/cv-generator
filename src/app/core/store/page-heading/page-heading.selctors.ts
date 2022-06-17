import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PageHeadingState, PAGE_HEADING_FEATURE_KEY } from './page-heading.reducers';

export const pageHeadingFeatureSelector =
  createFeatureSelector<PageHeadingState>(PAGE_HEADING_FEATURE_KEY);

export const pageHeadingSelector = createSelector(
  pageHeadingFeatureSelector,
  (state) => state.pageHeading,
);
