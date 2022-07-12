import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LEVELS_FEATURE_KEY } from './levels.reducers';
import { LevelsState } from './levels.reducers';

export const levelsFeatureSelector = createFeatureSelector<LevelsState>(LEVELS_FEATURE_KEY);

export const getLevelsSelector = createSelector(
  levelsFeatureSelector,

  (state) => state.levels,
);

export const getIsInitLevelsSelector = createSelector(
  levelsFeatureSelector,

  (state) => state.isInitLevels,
);
