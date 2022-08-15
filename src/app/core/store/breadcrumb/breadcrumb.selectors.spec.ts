import { BreadcrumbState } from './breadcrumb.reducers';
import { breadcrumbSelector } from './breadcrumb.selctors';

describe('breadcrumbSelectors', () => {
  const state: BreadcrumbState = {
    breadcrumbs: [
      {
        path: 'string',
        i18nKey: 'string',
      },
    ],
  };
  it('should return breadcrumbs array', () => {
    const result = breadcrumbSelector.projector(state);
    expect(result).toEqual(state.breadcrumbs);
  });
});
