import { createReducer, on } from '@ngrx/store';
import { BreadcrumbItem } from '../../interfaces/breadcrump-item.interface';
import { setBreadcrumbsAction } from './breadcrumb.actions';

export const BREADCRUMB_FEATURE_KEY = 'breadcrumb';

export interface BreadcrumbState {
  breadcrumbs: BreadcrumbItem[];
}

export const initialBreadcrumbState: BreadcrumbState = {
  breadcrumbs: [],
};

export const breadcrumbReducer = createReducer(
  initialBreadcrumbState,
  on(setBreadcrumbsAction, (state, action) => ({
    ...state,
    breadcrumbs: action.breadcrumbs,
  })),
);
