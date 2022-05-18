import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TemaState } from './main.reducers';

export const featureSelector = createFeatureSelector<TemaState>('tema');

export const temaSelector = createSelector(featureSelector, (state) => state.tema);
