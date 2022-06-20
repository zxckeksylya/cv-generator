import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BreadcrumbState, BREADCRUMB_FEATURE_KEY } from './breadcrumb.reducers';

export const breadcrumbFeatureSelector =
  createFeatureSelector<BreadcrumbState>(BREADCRUMB_FEATURE_KEY);

export const breadcrumbSelector = createSelector(
  breadcrumbFeatureSelector,
  (state) => state.breadcrumbs,
);
