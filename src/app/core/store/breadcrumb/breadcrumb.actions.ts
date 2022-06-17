import { createAction, props } from '@ngrx/store';
import { BreadcrumbItem } from '../../interfaces/breadcrump-item.interface';

export const setBreadcrumbs = createAction(
  '[BREADCRUMB] set new breadcrumb',
  props<{
    breadcrumbs: BreadcrumbItem[];
  }>(),
);
