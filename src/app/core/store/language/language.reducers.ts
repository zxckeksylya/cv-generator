import { createReducer, on } from '@ngrx/store';
import { initLanguageAction, initLanguageSuccessAction } from './language.actions';

export const LANGUAGE_FEATURE_KEY = 'language';

export interface LanguageState {
  language: string;
}

export const initionalLanguageState: LanguageState = {
  language: '',
};

export const LanguageReducer = createReducer(
  initionalLanguageState,
  on(initLanguageAction, (state) => ({
    ...state,
  })),
  on(initLanguageSuccessAction, (state, action) => ({
    ...state,
    language: action.language,
  })),
);
