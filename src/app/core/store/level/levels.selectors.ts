import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LevelsState, LEVELS_FEATURE_KEY } from './levels.reducers';

export const levelsFeatureSelector = createFeatureSelector<LevelsState>(LEVELS_FEATURE_KEY);

export const getLevelsSelector = createSelector(levelsFeatureSelector, (state) =>
  Object.values(state.levels),
);

export const getIsInitLevelsSelector = createSelector(
  levelsFeatureSelector,
  (state) => state.isInitLevels,
);

export const getLevelByIdSelector = createSelector(
  levelsFeatureSelector,
  (state: LevelsState, props: { id: string }) => state.levels[props.id],
);
