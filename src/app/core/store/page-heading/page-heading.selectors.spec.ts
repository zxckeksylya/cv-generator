import { PageHeadingState } from './page-heading.reducers';
import { pageHeadingSelector } from './page-heading.selctors';

describe('pageHeadingSelector', () => {
  const state: PageHeadingState = {
    pageHeading: {
      i18nKeyDescription: 'string',
      i18nKeySection: 'string',
    },
  };
  it('should return page heading', () => {
    const result = pageHeadingSelector.projector(state);
    expect(result).toEqual(state.pageHeading);
  });
});
