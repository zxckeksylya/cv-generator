import { createAction, props } from '@ngrx/store';
import { BreadcrumbItem } from '../../interfaces/breadcrump-item.interface';

export const setNewBreadcrumb = createAction(
  '[BREADCRUMP] set new breadcrumb',
  props<{
    arrayOfBreadcrumbs: BreadcrumbItem[];
  }>(),
);
