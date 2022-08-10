import { BreadcrumbItem } from '../../interfaces/breadcrump-item.interface';
import { setBreadcrumbsAction, clearBreadcrumbsStateAction } from './breadcrumb.actions';
import { breadcrumbReducer, initialBreadcrumbState, BreadcrumbState } from './breadcrumb.reducers';
fdescribe('breadcrumbReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = breadcrumbReducer(initialBreadcrumbState, action);

      expect(state).toBe(initialBreadcrumbState);
    });
  });

  describe('clearCategories action', () => {
    it('should clear state', () => {
      const action = clearBreadcrumbsStateAction;
      const state = breadcrumbReducer(initialBreadcrumbState, action);

      expect(state).toEqual(initialBreadcrumbState);
    });
  });

  describe('setBreadcrumbsAction', () => {
    it('should set breadcrumb at state', () => {
      const breadcrumbs: BreadcrumbItem[] = [
        {
          path: 'path',
          i18nKey: 'i18nKey',
        },
      ];

      const newState: BreadcrumbState = {
        breadcrumbs,
      };

      const action = setBreadcrumbsAction({ breadcrumbs });
      const state = breadcrumbReducer(initialBreadcrumbState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialBreadcrumbState);
    });
  });
});
