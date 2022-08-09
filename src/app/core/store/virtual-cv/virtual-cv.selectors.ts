import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VirtualCVState, VIRTUAL_CV_FEATURE_KEY } from './virtual-cv.reducers';

export const virtualCVFeatureSelector =
  createFeatureSelector<VirtualCVState>(VIRTUAL_CV_FEATURE_KEY);

export const getVirtualCVsSelector = createSelector(virtualCVFeatureSelector, state =>
  Object.values(state.virtualCVs),
);

export const getIsInitVirtualCVsSelector = createSelector(
  virtualCVFeatureSelector,
  state => state.isInitVirtualCVs,
);

export const getVirtualCvByIdSelector = createSelector(
  virtualCVFeatureSelector,
  (state: VirtualCVState, props: { id: string }) => state.virtualCVs[props.id],
);

export const getVirtualCVsByEmployeeIdSelector = createSelector(
  virtualCVFeatureSelector,
  (state: VirtualCVState, props: { id: string }) =>
    Object.values(state.virtualCVs).filter(item => item.user === props.id),
);

export const getActiveEmployeeSelector = createSelector(
  virtualCVFeatureSelector,
  state => state.activeEmployee,
);
