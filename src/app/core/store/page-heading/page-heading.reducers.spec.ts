import { clearPageHeadingStateAction, setPageHeadingAction } from './page-heading.actions';
import {
  initialPageHeadingState,
  pageHeadingReducer,
  PageHeadingState,
} from './page-heading.reducers';
import { PageHeadingItem } from '../../interfaces/page-heading-item.interface';

describe('pageHeadingReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = pageHeadingReducer(initialPageHeadingState, action);

      expect(state).toBe(initialPageHeadingState);
    });
  });

  describe('clearPageHeadingStateAction', () => {
    it('should clear state', () => {
      const action = clearPageHeadingStateAction;
      const state = pageHeadingReducer(initialPageHeadingState, action);

      expect(state).toEqual(initialPageHeadingState);
    });
  });

  describe('setPageHeadingAction', () => {
    it('should set page-heading in store', () => {
      const pageHeading: PageHeadingItem = {
        i18nKeyDescription: 'new',
        i18nKeySection: 'new',
      };

      const newState: PageHeadingState = {
        pageHeading: {
          i18nKeyDescription: 'new',
          i18nKeySection: 'new',
        },
      };

      const action = setPageHeadingAction({ pageHeading });
      const state = pageHeadingReducer(initialPageHeadingState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialPageHeadingState);
    });
  });
});
