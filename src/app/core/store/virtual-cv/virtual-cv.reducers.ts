import { createReducer, on } from '@ngrx/store';
import { VirtualCVMap, VirtualCV } from '../../interfaces/virtual-cv.interface';
import {
  createVirtualCVSuccessAction,
  getVirtualCVsSuccessAction,
  getVirtualCVByIdSuccessAction,
  clearVirtualCVsAction,
} from './virtual-cv.actions';
import { arrayToMap } from '../../utils/array-to-map.util';
export const VIRTUAL_CV_FEATURE_KEY = 'virtual-cv';

export interface VirtualCVState {
  virtualCVs: VirtualCVMap;
  isInitVirtualCVs: boolean;
}

export const initialVirtualCVsState: VirtualCVState = {
  virtualCVs: {},
  isInitVirtualCVs: false,
};

export const virtualCVReducer = createReducer(
  initialVirtualCVsState,
  on(clearVirtualCVsAction, () => ({
    ...initialVirtualCVsState,
  })),
  on(getVirtualCVsSuccessAction, (state, action) => ({
    ...state,
    isInitVirtualCVs: true,
    virtualCVs: arrayToMap<VirtualCV>(action.virtualCvs, 'id'),
  })),
  on(createVirtualCVSuccessAction, (state, action) => ({
    ...state,
    virtualCVs: {
      [action.virtualCV.id]: action.virtualCV,
      ...state.virtualCVs,
    },
  })),
  on(getVirtualCVByIdSuccessAction, (state, action) => ({
    ...state,
    virtualCVs: {
      ...state.virtualCVs,
      [action.virtualCV.id]: action.virtualCV,
    },
  })),
);
