import { ThemeState } from './theme.reducers';
import { themeSelector } from './theme.selectors';

describe('themeSelectors', () => {
  const state: ThemeState = {
    theme: 'light',
  };

  it('should return theme', () => {
    const result = themeSelector.projector(state);

    expect(result).toEqual(state.theme);
  });
});
