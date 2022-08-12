import { initThemeSuccessAction } from './theme.actions';
import { initialThemeState, themeReducer, ThemeState } from './theme.reducers';

describe('themeReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = themeReducer(initialThemeState, action);

      expect(state).toBe(initialThemeState);
    });
  });

  describe('initThemeSuccessAction', () => {
    it('should set new theme', () => {
      const theme = 'theme';

      const newState: ThemeState = {
        theme: 'theme',
      };

      const action = initThemeSuccessAction({ theme });
      const state = themeReducer(initialThemeState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialThemeState);
    });
  });
});
