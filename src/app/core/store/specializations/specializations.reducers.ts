import { INameId, INameIdMap } from '../../interfaces/name-id.interface';
import { createReducer, on } from '@ngrx/store';
import {
  clearSpecializationsAction,
  createSpecializationSuccessAction,
  deleteSpecializationSuccessAction,
  getSpecializationByIdSuccessAction,
  getSpecializationsSuccessAction,
} from './specializations.actions';
import { arrayToMap } from '../../utils/array-to-map.util';
import { deleteInMap } from '../../utils/delete-in-map.util';

export const SPECIALIZATION_FEATURE_KEY = 'specializations';

export interface SpecializationsState {
  specializations: INameIdMap;
  isInitSpecializations: boolean;
}

export const initialSpecializationsState: SpecializationsState = {
  specializations: {},
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
    specializations: arrayToMap<INameId>(action.specializations),
  })),
  on(createSpecializationSuccessAction, (state, action) => ({
    ...state,
    specializations: {
      [action.specialization.id]: action.specialization,
      ...state.specializations,
    },
  })),
  on(getSpecializationByIdSuccessAction, (state, action) => ({
    ...state,
    specializations: {
      ...state.specializations,
      [action.specialization.id]: action.specialization,
    },
  })),
  on(deleteSpecializationSuccessAction, (state, action) => ({
    ...state,
    specializations: deleteInMap<INameIdMap>(state.specializations, action.id),
  })),
);
