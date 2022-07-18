import { createReducer, on } from '@ngrx/store';
import { INameId, INameIdMap } from '../../interfaces/name-id.interface';
import { arrayToMap } from '../../utils/array-to-map.util';
import { deleteInMap } from '../../utils/delete-in-map.util';
import {
  clearLevelsAction,
  createLevelSuccessAction,
  deleteLevelSuccessAction,
  getLevelByIdSuccessAction,
  getLevelsSuccessAction,
} from './levels.actions';

export const LEVELS_FEATURE_KEY = 'levels';

export interface LevelsState {
  levels: INameIdMap;
  isInitLevels: boolean;
}

export const initialLevelsState: LevelsState = {
  levels: {},
  isInitLevels: false,
};

export const levelsReducer = createReducer(
  initialLevelsState,
  on(clearLevelsAction, () => ({
    ...initialLevelsState,
  })),
  on(getLevelsSuccessAction, (state, action) => ({
    ...state,
    isInitLevels: true,
    levels: arrayToMap<INameId>(action.levels),
  })),
  on(createLevelSuccessAction, (state, action) => ({
    ...state,
    levels: {
      [action.level.id]: action.level,
      ...state.levels,
    },
  })),
  on(getLevelByIdSuccessAction, (state, action) => ({
    ...state,
    levels: {
      ...state.levels,
      [action.level.id]: action.level,
    },
  })),
  on(deleteLevelSuccessAction, (state, action) => ({
    ...state,
    levels: deleteInMap<INameIdMap>(state.levels, action.id),
  })),
);
