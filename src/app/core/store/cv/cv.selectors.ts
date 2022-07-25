import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CVState, CV_FEATURE_KEY } from './cv.reducers';
export const cvFeatureSelector = createFeatureSelector<CVState>(CV_FEATURE_KEY);

export const getCVSelector = createSelector(cvFeatureSelector, state => Object.values(state.cvs));

export const getCVByIdSelector = createSelector(
  cvFeatureSelector,
  (state: CVState, props: { id: string }) => state.cvs[props.id],
);

export const getIsInitCVsSelector = createSelector(cvFeatureSelector, state => state.isInitCVs);

export const getCVsByEmployeeIdSelector = createSelector(
  cvFeatureSelector,
  (state: CVState, props: { id: string }) =>
    Object.values(state.cvs).filter(item => {
      if (item.user !== null) {
        return item.user.id === props.id;
      }
      return false;
    }),
);
