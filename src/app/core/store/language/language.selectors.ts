import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LanguagesState, LANGUAGE_FEATURE_KEY } from './language.reducers';

export const languagesFeatureSelector = createFeatureSelector<LanguagesState>(LANGUAGE_FEATURE_KEY);

export const getLanguagesSelector = createSelector(languagesFeatureSelector, state =>
  Object.values(state.languages),
);

export const getLanguagesNamesSelector = createSelector(languagesFeatureSelector, state => [
  ...new Set(Object.values(state.languages).map(item => item.name)),
]);

export const getLanguagesByNameSelector = createSelector(
  languagesFeatureSelector,
  (state: LanguagesState, props: { name: string }) =>
    Object.values(state.languages).filter(item => item.name === props.name),
);

export const getLanguageByIdSelector = createSelector(
  languagesFeatureSelector,
  (state: LanguagesState, props: { id: string }) => state.languages[props.id],
);

export const getFirstLanguage = createSelector(
  languagesFeatureSelector,
  state => Object.values(state.languages)[0],
);

export const getLanguagesByLevelIdSelector = createSelector(
  languagesFeatureSelector,
  (state: LanguagesState, props: { id: string }) =>
    Object.values(state.languages).filter(item =>
      item.everydayReadingLevel.id === props.id ||
      item.everydaySpeakingLevel.id === props.id ||
      item.everydayWritingLevel.id === props.id ||
      item.professionalReadingLevel.id === props.id ||
      item.professionalSpeakingLevel.id === props.id ||
      item.professionalWritingLevel.id === props.id
        ? true
        : false,
    ),
);

export const getIsInitLanguagesSelector = createSelector(
  languagesFeatureSelector,
  state => state.isInitLanguages,
);

export const getLastCreatedLanguages = createSelector(languagesFeatureSelector, state =>
  Object.values(state.lastCreatedLanguages).map(item => item.id),
);
