import { INameId } from '../../interfaces/name-id.interface';
import { createReducer, on } from '@ngrx/store';
import { clearLevelsAction, getLevelsSuccessAction } from './levels.actions';

export const LEVELS_FEATURE_KEY = 'levels';

export interface LevelsState {
  levels: INameId[];
  isInitLevels: boolean;
}

export const initialLevelsState: LevelsState = {
  levels: [],
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
    levels: action.levels,
  })),
);
