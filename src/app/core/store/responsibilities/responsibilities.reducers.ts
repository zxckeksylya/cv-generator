import { INameId } from '../../interfaces/name-id.interface';
import { createReducer, on } from '@ngrx/store';
import {
  clearResponsibilitiesAction,
  getResponsibilitiesSuccessAction,
} from './responsibilities.actions';

export const RESPONSIBILITIES_FEATURE_KEY = 'responsibilities';

export interface ResponsibilitiesState {
  responsibilities: INameId[];
  isInitResponsibilities: boolean;
}

export const initialResponsibilitiesState: ResponsibilitiesState = {
  responsibilities: [],
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
    responsibilities: action.responsibilities,
  })),
);
