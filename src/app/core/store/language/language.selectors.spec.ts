import { Language } from '../../interfaces/language.interface';
import { LanguagesState } from './language.reducers';
import { getLanguagesByLevelIdSelector } from './language.selectors';
import {
  getFirstLanguage,
  getLanguageByIdSelector,
  getLanguagesByNameSelector,
} from './language.selectors';
import {
  getIsInitLanguagesSelector,
  getLanguagesNamesSelector,
  getLanguagesSelector,
  getLastCreatedLanguages,
} from './language.selectors';

describe('languagesSelectors', () => {
  const state: LanguagesState = {
    languages: {
      old: {
        id: 'old',
        name: 'old',
        everydayReadingLevel: { id: 'id', name: 'string' },
        everydaySpeakingLevel: { id: 'id', name: 'string' },
        everydayWritingLevel: { id: 'id', name: 'string' },
        professionalReadingLevel: { id: 'id', name: 'string' },
        professionalSpeakingLevel: { id: 'id', name: 'string' },
        professionalWritingLevel: { id: 'id', name: 'string' },
      },
      id: {
        id: 'id',
        name: 'name',
        everydayReadingLevel: { id: 'string', name: 'string' },
        everydaySpeakingLevel: { id: 'string', name: 'string' },
        everydayWritingLevel: { id: 'string', name: 'string' },
        professionalReadingLevel: { id: 'string', name: 'string' },
        professionalSpeakingLevel: { id: 'string', name: 'string' },
        professionalWritingLevel: { id: 'string', name: 'string' },
      },
    },
    isInitLanguages: true,
    lastCreatedLanguages: {
      old: {
        id: 'old',
        name: 'old',
        everydayReadingLevel: { id: 'id', name: 'string' },
        everydaySpeakingLevel: { id: 'id', name: 'string' },
        everydayWritingLevel: { id: 'id', name: 'string' },
        professionalReadingLevel: { id: 'id', name: 'string' },
        professionalSpeakingLevel: { id: 'id', name: 'string' },
        professionalWritingLevel: { id: 'id', name: 'string' },
      },
    },
  };

  it('should return languages id', () => {
    const languages: Language[] = [
      {
        id: 'old',
        name: 'old',
        everydayReadingLevel: { id: 'id', name: 'string' },
        everydaySpeakingLevel: { id: 'id', name: 'string' },
        everydayWritingLevel: { id: 'id', name: 'string' },
        professionalReadingLevel: { id: 'id', name: 'string' },
        professionalSpeakingLevel: { id: 'id', name: 'string' },
        professionalWritingLevel: { id: 'id', name: 'string' },
      },
      {
        id: 'id',
        name: 'name',
        everydayReadingLevel: { id: 'string', name: 'string' },
        everydaySpeakingLevel: { id: 'string', name: 'string' },
        everydayWritingLevel: { id: 'string', name: 'string' },
        professionalReadingLevel: { id: 'string', name: 'string' },
        professionalSpeakingLevel: { id: 'string', name: 'string' },
        professionalWritingLevel: { id: 'string', name: 'string' },
      },
    ];

    const result = getLanguagesSelector.projector(state);

    expect(result).toEqual(languages);
  });

  it('should return languages names', () => {
    const languages: string[] = ['old', 'name'];
    const result = getLanguagesNamesSelector.projector(state);
    expect(result).toEqual(languages);
  });

  it('should return isInit', () => {
    const result = getIsInitLanguagesSelector.projector(state);

    expect(result).toEqual(state.isInitLanguages);
  });

  it('should return get last created languages', () => {
    const languages: string[] = ['old'];
    const result = getLastCreatedLanguages.projector(state);

    expect(result).toEqual(languages);
  });

  it('should return first language in store', () => {
    const language: Language = {
      id: 'old',
      name: 'old',
      everydayReadingLevel: { id: 'id', name: 'string' },
      everydaySpeakingLevel: { id: 'id', name: 'string' },
      everydayWritingLevel: { id: 'id', name: 'string' },
      professionalReadingLevel: { id: 'id', name: 'string' },
      professionalSpeakingLevel: { id: 'id', name: 'string' },
      professionalWritingLevel: { id: 'id', name: 'string' },
    };
    const result = getFirstLanguage.projector(state);
    expect(result).toEqual(language);
  });

  it('should return language by id', () => {
    const id = 'old';
    const language: Language = {
      id: 'old',
      name: 'old',
      everydayReadingLevel: { id: 'id', name: 'string' },
      everydaySpeakingLevel: { id: 'id', name: 'string' },
      everydayWritingLevel: { id: 'id', name: 'string' },
      professionalReadingLevel: { id: 'id', name: 'string' },
      professionalSpeakingLevel: { id: 'id', name: 'string' },
      professionalWritingLevel: { id: 'id', name: 'string' },
    };
    const result = getLanguageByIdSelector.projector(state, { id });

    expect(result).toEqual(language);
  });

  it('should return languages by name', () => {
    const name = 'old';
    const languages: Language[] = [
      {
        id: 'old',
        name: 'old',
        everydayReadingLevel: { id: 'id', name: 'string' },
        everydaySpeakingLevel: { id: 'id', name: 'string' },
        everydayWritingLevel: { id: 'id', name: 'string' },
        professionalReadingLevel: { id: 'id', name: 'string' },
        professionalSpeakingLevel: { id: 'id', name: 'string' },
        professionalWritingLevel: { id: 'id', name: 'string' },
      },
    ];
    const result = getLanguagesByNameSelector.projector(state, { name });
    expect(result).toEqual(languages);
  });

  it('should return languages by level id', () => {
    const id = 'id';
    const languages: Language[] = [
      {
        id: 'old',
        name: 'old',
        everydayReadingLevel: { id: 'id', name: 'string' },
        everydaySpeakingLevel: { id: 'id', name: 'string' },
        everydayWritingLevel: { id: 'id', name: 'string' },
        professionalReadingLevel: { id: 'id', name: 'string' },
        professionalSpeakingLevel: { id: 'id', name: 'string' },
        professionalWritingLevel: { id: 'id', name: 'string' },
      },
    ];
    const result = getLanguagesByLevelIdSelector.projector(state, { id });
    expect(result).toEqual(languages);
  });
});
