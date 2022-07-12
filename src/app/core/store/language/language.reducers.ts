import { createReducer, on } from '@ngrx/store';
import { Language } from '../../interfaces/language.interface';
import { clearLanguagesAction, getLanguagesSuccessAction } from './language.actions';

export const LANGUAGE_FEATURE_KEY = 'languages';

export interface LanguagesState {
  languages: Language[];
  isInitLanguages: boolean;
}

export const initialLanguagesState: LanguagesState = {
  languages: [],
  isInitLanguages: false,
};

export const languagesReducer = createReducer(
  initialLanguagesState,
  on(clearLanguagesAction, () => ({
    ...initialLanguagesState,
  })),
  on(getLanguagesSuccessAction, (state, action) => ({
    ...state,
    isInitLanguages: true,
    languages: action.languages,
  })),
);
