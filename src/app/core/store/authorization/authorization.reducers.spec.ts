import { AccessToken } from '../../interfaces/access-token.interface';
import { User } from '../../interfaces/user.interface';
import {
  clearAuthorizationStateSuccessAction,
  initTokenSuccessAction,
  loginUserAction,
  loginUserFailedAction,
  loginUserSuccessAction,
  setAuthorizationUserSuccessAction,
} from './authorization.actions';
import {
  authorizationReducer,
  AuthorizationState,
  initialAuthorizationState,
} from './authorization.reducers';

fdescribe('authorizationReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = authorizationReducer(initialAuthorizationState, action);

      expect(state).toBe(initialAuthorizationState);
    });
  });

  describe('clearAuthorizationStateSuccessAction', () => {
    it('should clear state', () => {
      const action = clearAuthorizationStateSuccessAction();
      const state = authorizationReducer(initialAuthorizationState, action);

      expect(state).toEqual(initialAuthorizationState);
    });
  });

  describe('initTokenSuccessAction', () => {
    it('should set access token', () => {
      const token: AccessToken = {
        accessToken: 'string',
      };

      const newState: AuthorizationState = {
        accessToken: 'string',
        formEnabled: true,
        user: null,
      };

      const action = initTokenSuccessAction(token);
      const state = authorizationReducer(initialAuthorizationState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialAuthorizationState);
    });
  });

  describe('loginUserAction', () => {
    it('should set formEnabled', () => {
      const newState: AuthorizationState = {
        accessToken: '',
        formEnabled: false,
        user: null,
      };

      const action = loginUserAction;
      const state = authorizationReducer(initialAuthorizationState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialAuthorizationState);
    });
  });

  describe('loginUserSuccessAction and loginUserFailedAction', () => {
    it('should set formEnabled loginUserSuccessAction', () => {
      const oldState: AuthorizationState = {
        accessToken: '',
        formEnabled: false,
        user: null,
      };

      const newState: AuthorizationState = {
        accessToken: '',
        formEnabled: true,
        user: null,
      };

      const action = loginUserSuccessAction;
      const state = authorizationReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });

    it('should set formEnabled loginUserFailedAction', () => {
      const oldState: AuthorizationState = {
        accessToken: '',
        formEnabled: false,
        user: null,
      };

      const newState: AuthorizationState = {
        accessToken: '',
        formEnabled: true,
        user: null,
      };

      const action = loginUserFailedAction;
      const state = authorizationReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('setAuthorizationUserSuccessAction', () => {
    it('should set authorization user', () => {
      const user: User = {
        skills: [],
        languages: [],
        firstName: '',
        lastName: '',
        email: '',
        institution: '',
        diplomaProfession: '',
        department: '',
        role: { id: 'string', name: 'name' },
        id: 'id',
      };

      const newState: AuthorizationState = {
        accessToken: '',
        formEnabled: true,
        user,
      };

      const action = setAuthorizationUserSuccessAction({ user });
      const state = authorizationReducer(initialAuthorizationState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialAuthorizationState);
    });
  });
});
