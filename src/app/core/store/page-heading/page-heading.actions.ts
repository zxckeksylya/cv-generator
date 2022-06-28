import { createAction, props } from '@ngrx/store';
import { PageHeadingItem } from '../../interfaces/page-heading-item.interface';

export const setPageHeadingAction = createAction(
  '[PAGE_HEADING] set page-heading',
  props<{ pageHeading: PageHeadingItem }>(),
);

export const clearPageHeadingStateAction = createAction('[PAGE_HEADING] clear page-heading');
