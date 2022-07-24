import { createReducer, on } from '@ngrx/store';
import { Language, LanguageMap } from '../../interfaces/language.interface';
import { arrayToMap } from '../../utils/array-to-map.util';
import { deleteInMap } from '../../utils/delete-in-map.util';
import {
  baseCreateLanguageSuccessAction,
  clearLanguagesAction,
  clearLastCreatedLanguages,
  createLanguageSuccessAction,
  deleteLanguageSuccessAction,
  getLanguageByIdSuccessAction,
  getLanguagesSuccessAction,
} from './language.actions';

export const LANGUAGE_FEATURE_KEY = 'languages';

export interface LanguagesState {
  languages: LanguageMap;
  isInitLanguages: boolean;
  lastCreatedLanguages: LanguageMap;
}

export const initialLanguagesState: LanguagesState = {
  languages: {},
  isInitLanguages: false,
  lastCreatedLanguages: {},
};

export const languagesReducer = createReducer(
  initialLanguagesState,
  on(clearLanguagesAction, () => ({
    ...initialLanguagesState,
  })),
  on(clearLastCreatedLanguages, state => ({
    ...state,
    lastCreatedLanguages: {},
  })),
  on(getLanguagesSuccessAction, (state, action) => ({
    ...state,
    isInitLanguages: true,
    languages: arrayToMap<Language>(action.languages, 'id'),
  })),
  on(baseCreateLanguageSuccessAction, (state, action) => ({
    ...state,
    languages: {
      [action.language.id]: action.language,
      ...state.languages,
    },
  })),
  on(createLanguageSuccessAction, (state, action) => ({
    ...state,
    lastCreatedLanguages: {
      [action.language.id]: action.language,
      ...state.lastCreatedLanguages,
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
