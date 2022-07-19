import { createReducer, on } from '@ngrx/store';
import { Language, LanguageMap } from '../../interfaces/language.interface';
import {
  clearLanguagesAction,
  createLanguageSuccessAction,
  getLanguagesSuccessAction,
} from './language.actions';
import { arrayToMap } from '../../utils/array-to-map.util';
import { getLanguageByIdSuccessAction, deleteLanguageSuccessAction } from './language.actions';
import { deleteInMap } from '../../utils/delete-in-map.util';

export const LANGUAGE_FEATURE_KEY = 'languages';

export interface LanguagesState {
  languages: LanguageMap;
  isInitLanguages: boolean;
}

export const initialLanguagesState: LanguagesState = {
  languages: {},
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
    languages: arrayToMap<Language>(action.languages, 'id'),
  })),
  on(createLanguageSuccessAction, (state, action) => ({
    ...state,
    languages: {
      [action.language.id]: action.language,
      ...state.languages,
    },
  })),
  on(getLanguageByIdSuccessAction, (state, action) => ({
    ...state,
    languages: {
      ...state.languages,
      [action.language.id]: action.language,
    },
  })),
  on(deleteLanguageSuccessAction, (state, action) => ({
    ...state,
    languages: deleteInMap<LanguageMap>(state.languages, action.id),
  })),
);
