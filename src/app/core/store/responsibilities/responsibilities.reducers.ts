import { createReducer, on } from '@ngrx/store';
import { INameId, INameIdMap } from '../../interfaces/name-id.interface';
import { arrayToMap } from '../../utils/array-to-map.util';
import { deleteInMap } from '../../utils/delete-in-map.util';
import {
  clearResponsibilitiesAction,
  createResponsibilitySuccessAction,
  deleteResponsibilitySuccessAction,
  getResponsibilitiesSuccessAction,
  getResponsibilityByIdSuccessAction,
} from './responsibilities.actions';

export const RESPONSIBILITIES_FEATURE_KEY = 'responsibilities';

export interface ResponsibilitiesState {
  responsibilities: INameIdMap;
  isInitResponsibilities: boolean;
}

export const initialResponsibilitiesState: ResponsibilitiesState = {
  responsibilities: {},
  isInitResponsibilities: false,
};

export const responsibilitiesReducer = createReducer(
  initialResponsibilitiesState,
  on(clearResponsibilitiesAction, () => ({
    ...initialResponsibilitiesState,
  })),
  on(getResponsibilitiesSuccessAction, (state, action) => ({
    ...state,
    isInitResponsibilities: true,
    responsibilities: arrayToMap<INameId>(action.responsibilities),
  })),
  on(createResponsibilitySuccessAction, (state, action) => ({
    ...state,
    responsibilities: {
      [action.responsibility.id]: action.responsibility,
      ...state.responsibilities,
    },
  })),
  on(getResponsibilityByIdSuccessAction, (state, action) => ({
    ...state,
    responsibilities: {
      ...state.responsibilities,
      [action.responsibility.id]: action.responsibility,
    },
  })),
  on(deleteResponsibilitySuccessAction, (state, action) => ({
    ...state,
    responsibilities: deleteInMap<INameIdMap>(state.responsibilities, action.id),
  })),
);
