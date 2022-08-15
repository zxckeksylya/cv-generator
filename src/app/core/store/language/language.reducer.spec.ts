import { Language } from '../../interfaces/language.interface';
import {
  baseCreateLanguageSuccessAction,
  clearLanguagesAction,
  clearLastCreatedLanguages,
  createLanguageSuccessAction,
  deleteLanguageSuccessAction,
  getLanguageByIdSuccessAction,
  getLanguagesSuccessAction,
} from './language.actions';
import { initialLanguagesState, languagesReducer, LanguagesState } from './language.reducers';

describe('languagesReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = languagesReducer(initialLanguagesState, action);

      expect(state).toBe(initialLanguagesState);
    });
  });

  describe('clearLanguagesAction', () => {
    it('should clear state', () => {
      const action = clearLanguagesAction;
      const state = languagesReducer(initialLanguagesState, action);

      expect(state).toEqual(initialLanguagesState);
    });
  });

  describe('getLanguagesSuccessAction', () => {
    it('should set languages in state', () => {
      const languages: Language[] = [
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
      const newState: LanguagesState = {
        languages: {
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
        lastCreatedLanguages: {},
      };
      const action = getLanguagesSuccessAction({ languages });
      const state = languagesReducer(initialLanguagesState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialLanguagesState);
    });
  });

  describe('clearLastCreatedLanguages', () => {
    it('should clear last created language', () => {
      const oldState: LanguagesState = {
        languages: {},
        isInitLanguages: true,
        lastCreatedLanguages: {
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
      };

      const newState: LanguagesState = {
        languages: {},
        isInitLanguages: true,
        lastCreatedLanguages: {},
      };

      const action = clearLastCreatedLanguages;
      const state = languagesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('baseCreateLanguageSuccessAction', () => {
    it('should set created language in state', () => {
      const language: Language = {
        id: 'id',
        name: 'name',
        everydayReadingLevel: { id: 'string', name: 'string' },
        everydaySpeakingLevel: { id: 'string', name: 'string' },
        everydayWritingLevel: { id: 'string', name: 'string' },
        professionalReadingLevel: { id: 'string', name: 'string' },
        professionalSpeakingLevel: { id: 'string', name: 'string' },
        professionalWritingLevel: { id: 'string', name: 'string' },
      };

      const oldState: LanguagesState = {
        languages: {
          old: {
            id: 'old',
            name: 'old',
            everydayReadingLevel: { id: 'string', name: 'string' },
            everydaySpeakingLevel: { id: 'string', name: 'string' },
            everydayWritingLevel: { id: 'string', name: 'string' },
            professionalReadingLevel: { id: 'string', name: 'string' },
            professionalSpeakingLevel: { id: 'string', name: 'string' },
            professionalWritingLevel: { id: 'string', name: 'string' },
          },
        },
        isInitLanguages: true,
        lastCreatedLanguages: {},
      };
      const newState: LanguagesState = {
        languages: {
          old: {
            id: 'old',
            name: 'old',
            everydayReadingLevel: { id: 'string', name: 'string' },
            everydaySpeakingLevel: { id: 'string', name: 'string' },
            everydayWritingLevel: { id: 'string', name: 'string' },
            professionalReadingLevel: { id: 'string', name: 'string' },
            professionalSpeakingLevel: { id: 'string', name: 'string' },
            professionalWritingLevel: { id: 'string', name: 'string' },
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
        lastCreatedLanguages: {},
      };

      const action = baseCreateLanguageSuccessAction({ language });
      const state = languagesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('createLanguageSuccessAction', () => {
    it('should set last created language in state', () => {
      const language: Language = {
        id: 'id',
        name: 'name',
        everydayReadingLevel: { id: 'string', name: 'string' },
        everydaySpeakingLevel: { id: 'string', name: 'string' },
        everydayWritingLevel: { id: 'string', name: 'string' },
        professionalReadingLevel: { id: 'string', name: 'string' },
        professionalSpeakingLevel: { id: 'string', name: 'string' },
        professionalWritingLevel: { id: 'string', name: 'string' },
      };

      const oldState: LanguagesState = {
        languages: {},
        isInitLanguages: true,
        lastCreatedLanguages: {
          old: {
            id: 'old',
            name: 'old',
            everydayReadingLevel: { id: 'string', name: 'string' },
            everydaySpeakingLevel: { id: 'string', name: 'string' },
            everydayWritingLevel: { id: 'string', name: 'string' },
            professionalReadingLevel: { id: 'string', name: 'string' },
            professionalSpeakingLevel: { id: 'string', name: 'string' },
            professionalWritingLevel: { id: 'string', name: 'string' },
          },
        },
      };
      const newState: LanguagesState = {
        languages: {},
        isInitLanguages: true,
        lastCreatedLanguages: {
          old: {
            id: 'old',
            name: 'old',
            everydayReadingLevel: { id: 'string', name: 'string' },
            everydaySpeakingLevel: { id: 'string', name: 'string' },
            everydayWritingLevel: { id: 'string', name: 'string' },
            professionalReadingLevel: { id: 'string', name: 'string' },
            professionalSpeakingLevel: { id: 'string', name: 'string' },
            professionalWritingLevel: { id: 'string', name: 'string' },
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
      };

      const action = createLanguageSuccessAction({ language });
      const state = languagesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('getLanguageByIdSuccessAction', () => {
    it('should set updated language in state', () => {
      const language: Language = {
        id: 'id',
        name: 'new',
        everydayReadingLevel: { id: 'string', name: 'string' },
        everydaySpeakingLevel: { id: 'string', name: 'string' },
        everydayWritingLevel: { id: 'string', name: 'string' },
        professionalReadingLevel: { id: 'string', name: 'string' },
        professionalSpeakingLevel: { id: 'string', name: 'string' },
        professionalWritingLevel: { id: 'string', name: 'string' },
      };
      const oldState: LanguagesState = {
        languages: {
          id: {
            id: 'id',
            name: 'old',
            everydayReadingLevel: { id: 'string', name: 'string' },
            everydaySpeakingLevel: { id: 'string', name: 'string' },
            everydayWritingLevel: { id: 'string', name: 'string' },
            professionalReadingLevel: { id: 'string', name: 'string' },
            professionalSpeakingLevel: { id: 'string', name: 'string' },
            professionalWritingLevel: { id: 'string', name: 'string' },
          },
        },
        isInitLanguages: true,
        lastCreatedLanguages: {},
      };
      const newState: LanguagesState = {
        languages: {
          id: {
            id: 'id',
            name: 'new',
            everydayReadingLevel: { id: 'string', name: 'string' },
            everydaySpeakingLevel: { id: 'string', name: 'string' },
            everydayWritingLevel: { id: 'string', name: 'string' },
            professionalReadingLevel: { id: 'string', name: 'string' },
            professionalSpeakingLevel: { id: 'string', name: 'string' },
            professionalWritingLevel: { id: 'string', name: 'string' },
          },
        },
        isInitLanguages: true,
        lastCreatedLanguages: {},
      };

      const action = getLanguageByIdSuccessAction({ language });
      const state = languagesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
    it('should set new language in state', () => {
      const language: Language = {
        id: 'id',
        name: 'name',
        everydayReadingLevel: { id: 'string', name: 'string' },
        everydaySpeakingLevel: { id: 'string', name: 'string' },
        everydayWritingLevel: { id: 'string', name: 'string' },
        professionalReadingLevel: { id: 'string', name: 'string' },
        professionalSpeakingLevel: { id: 'string', name: 'string' },
        professionalWritingLevel: { id: 'string', name: 'string' },
      };
      const oldState: LanguagesState = {
        languages: {
          old: {
            id: 'old',
            name: 'old',
            everydayReadingLevel: { id: 'string', name: 'string' },
            everydaySpeakingLevel: { id: 'string', name: 'string' },
            everydayWritingLevel: { id: 'string', name: 'string' },
            professionalReadingLevel: { id: 'string', name: 'string' },
            professionalSpeakingLevel: { id: 'string', name: 'string' },
            professionalWritingLevel: { id: 'string', name: 'string' },
          },
        },
        isInitLanguages: true,
        lastCreatedLanguages: {},
      };
      const newState: LanguagesState = {
        languages: {
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
          old: {
            id: 'old',
            name: 'old',
            everydayReadingLevel: { id: 'string', name: 'string' },
            everydaySpeakingLevel: { id: 'string', name: 'string' },
            everydayWritingLevel: { id: 'string', name: 'string' },
            professionalReadingLevel: { id: 'string', name: 'string' },
            professionalSpeakingLevel: { id: 'string', name: 'string' },
            professionalWritingLevel: { id: 'string', name: 'string' },
          },
        },
        isInitLanguages: true,
        lastCreatedLanguages: {},
      };

      const action = getLanguageByIdSuccessAction({ language });
      const state = languagesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('deleteLanguageSuccessAction', () => {
    it('should delete language in state', () => {
      const language: Language = {
        id: 'old',
        name: 'old',
        everydayReadingLevel: { id: 'string', name: 'string' },
        everydaySpeakingLevel: { id: 'string', name: 'string' },
        everydayWritingLevel: { id: 'string', name: 'string' },
        professionalReadingLevel: { id: 'string', name: 'string' },
        professionalSpeakingLevel: { id: 'string', name: 'string' },
        professionalWritingLevel: { id: 'string', name: 'string' },
      };
      const oldState: LanguagesState = {
        languages: {
          old: {
            id: 'old',
            name: 'old',
            everydayReadingLevel: { id: 'string', name: 'string' },
            everydaySpeakingLevel: { id: 'string', name: 'string' },
            everydayWritingLevel: { id: 'string', name: 'string' },
            professionalReadingLevel: { id: 'string', name: 'string' },
            professionalSpeakingLevel: { id: 'string', name: 'string' },
            professionalWritingLevel: { id: 'string', name: 'string' },
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
        lastCreatedLanguages: {},
      };
      const newState: LanguagesState = {
        languages: {
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
        lastCreatedLanguages: {},
      };

      const action = deleteLanguageSuccessAction({ id: language.id });
      const state = languagesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
});
