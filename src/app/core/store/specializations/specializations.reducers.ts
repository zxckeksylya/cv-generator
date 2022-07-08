import { INameId } from '../../interfaces/name-id.interface';
import { createReducer, on } from '@ngrx/store';
import {
  clearSpecializationsAction,
  getSpecializationsSuccessAction,
} from './specializations.actions';

export const SPECIALIZATION_FEATURE_KEY = 'specializations';

export interface SpecializationsState {
  specializations: INameId[];
  isInitSpecializations: boolean;
}

export const initialSpecializationsState: SpecializationsState = {
  specializations: [],
  isInitSpecializations: false,
};

export const specializationsReducer = createReducer(
  initialSpecializationsState,
  on(clearSpecializationsAction, () => ({
    ...initialSpecializationsState,
  })),
  on(getSpecializationsSuccessAction, (state, action) => ({
    ...state,
    isInitSpecializations: true,
    specializations: action.specializations,
  })),
);
