import { createAction, props } from '@ngrx/store';
import { BreadcrumbItem } from '../../interfaces/breadcrump-item.interface';

export const setBreadcrumbsAction = createAction(
  '[BREADCRUMBS] set breadcrumbs',
  props<{
    breadcrumbs: BreadcrumbItem[];
  }>(),
);
