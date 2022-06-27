import { createReducer, on } from '@ngrx/store';
import { BreadcrumbItem } from '../../interfaces/breadcrump-item.interface';
import { setBreadcrumbsAction, clearBreadcrumbsStateAction } from './breadcrumb.actions';

export const BREADCRUMB_FEATURE_KEY = 'breadcrumb';

export interface BreadcrumbState {
  breadcrumbs: BreadcrumbItem[];
}

export const initionalBreadcrumbState: BreadcrumbState = {
  breadcrumbs: [],
};

export const breadcrumbReducer = createReducer(
  initionalBreadcrumbState,
  on(setBreadcrumbsAction, (state, action) => ({
    ...state,
    breadcrumbs: action.breadcrumbs,
  })),
  on(clearBreadcrumbsStateAction, () => ({
    ...initionalBreadcrumbState,
  })),
);
