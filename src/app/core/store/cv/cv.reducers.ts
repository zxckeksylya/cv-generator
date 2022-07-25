import { createReducer, on } from '@ngrx/store';
import { CV, CVMap } from '../../interfaces/cv.interface';
import { arrayToMap } from '../../utils/array-to-map.util';
import {
  getCVsSuccessAction,
  getCVByIdSuccessAction,
  createCVSuccessAction,
  clearCVStoreAction,
} from './cv.actions';

export const CV_FEATURE_KEY = 'cv';

export interface CVState {
  cvs: CVMap;
  isInitCVs: boolean;
}

export const initialCVState: CVState = {
  cvs: {},
  isInitCVs: false,
};

export const cvReducer = createReducer(
  initialCVState,
  on(getCVsSuccessAction, (state, action) => ({
    ...state,
    isInitCVs: true,
    cvs: arrayToMap<CV>(action.cvs, 'id'),
  })),
  on(getCVByIdSuccessAction, (state, action) => ({
    ...state,
    cvs: {
      ...state.cvs,
      [action.cv.id]: action.cv,
    },
  })),
  on(createCVSuccessAction, (state, action) => ({
    ...state,
    cvs: {
      ...state.cvs,
      [action.cv.id]: action.cv,
    },
  })),
  on(clearCVStoreAction, () => ({
    ...initialCVState,
  })),
);
