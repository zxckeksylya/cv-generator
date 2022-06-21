import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlertState, ALERT_FEATURE_KEY } from './alert.reducers';

export const alertFeatureSelector = createFeatureSelector<AlertState>(ALERT_FEATURE_KEY);

export const alertSelector = createSelector(alertFeatureSelector, (state) => state.errors);
