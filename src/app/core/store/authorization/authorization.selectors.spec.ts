import { AuthorizationState } from './authorization.reducers';
import { accessTokenSelector, formEnabledSelector, userSelector } from './authorization.selectors';

describe('authorizationSelectors', () => {
  const initialState: AuthorizationState = {
    accessToken: 'accessToken',
    user: {
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
    },
    formEnabled: true,
  };

  it('should return access token', () => {
    const result = accessTokenSelector.projector(initialState);
    expect(result).toEqual(initialState.accessToken);
  });

  it('should return formEnabled', () => {
    const result = formEnabledSelector.projector(initialState);
    expect(result).toEqual(initialState.formEnabled);
  });

  it('should return user', () => {
    const result = userSelector.projector(initialState);
    expect(result).toEqual(initialState.user);
  });
});
