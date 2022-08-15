import { VirtualCV } from '../../interfaces/virtual-cv.interface';
import {
  activateEmployeeAction,
  clearVirtualCVsAction,
  createVirtualCVSuccessAction,
  getVirtualCVByIdSuccessAction,
  getVirtualCVsSuccessAction,
} from './virtual-cv.actions';
import { initialVirtualCVsState, virtualCVReducer, VirtualCVState } from './virtual-cv.reducers';
import { clearActivateEmployeeAction } from './virtual-cv.actions';
describe('virtualCVReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = virtualCVReducer(initialVirtualCVsState, action);

      expect(state).toBe(initialVirtualCVsState);
    });
  });

  describe('clearVirtualCVsAction', () => {
    it('should clear state', () => {
      const action = clearVirtualCVsAction;
      const state = virtualCVReducer(initialVirtualCVsState, action);

      expect(state).toEqual(initialVirtualCVsState);
    });
  });

  describe('getVirtualCVsSuccessAction', () => {
    it('should set virtualCVs in state', () => {
      const virtualCvs: VirtualCV[] = [
        {
          id: 'id',
          user: 'id',
          data: {
            education: {
              establishment: 'string',
              profession: 'string',
            },
            foreignLanguage: [],
            general: {
              firstName: 'string',
              lastName: 'string',
              name: 'string',
            },
            projects: [],
            resume: {
              content: 'string',
            },
            skills: [],
          },
        },
      ];
      const newState: VirtualCVState = {
        virtualCVs: {
          id: {
            id: 'id',
            user: 'id',
            data: {
              education: {
                establishment: 'string',
                profession: 'string',
              },
              foreignLanguage: [],
              general: {
                firstName: 'string',
                lastName: 'string',
                name: 'string',
              },
              projects: [],
              resume: {
                content: 'string',
              },
              skills: [],
            },
          },
        },
        isInitVirtualCVs: true,
        activeEmployee: '',
      };
      const action = getVirtualCVsSuccessAction({ virtualCvs });
      const state = virtualCVReducer(initialVirtualCVsState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialVirtualCVsState);
    });
  });

  describe('createVirtualCVSuccessAction', () => {
    it('should set created category in state', () => {
      const virtualCv: VirtualCV = {
        id: 'id',
        user: 'id',
        data: {
          education: {
            establishment: 'string',
            profession: 'string',
          },
          foreignLanguage: [],
          general: {
            firstName: 'string',
            lastName: 'string',
            name: 'string',
          },
          projects: [],
          resume: {
            content: 'string',
          },
          skills: [],
        },
      };
      const oldState: VirtualCVState = {
        virtualCVs: {
          old: {
            id: 'old',
            user: 'old',
            data: {
              education: {
                establishment: 'string',
                profession: 'string',
              },
              foreignLanguage: [],
              general: {
                firstName: 'string',
                lastName: 'string',
                name: 'string',
              },
              projects: [],
              resume: {
                content: 'string',
              },
              skills: [],
            },
          },
        },
        isInitVirtualCVs: true,
        activeEmployee: '',
      };
      const newState: VirtualCVState = {
        virtualCVs: {
          id: {
            id: 'id',
            user: 'id',
            data: {
              education: {
                establishment: 'string',
                profession: 'string',
              },
              foreignLanguage: [],
              general: {
                firstName: 'string',
                lastName: 'string',
                name: 'string',
              },
              projects: [],
              resume: {
                content: 'string',
              },
              skills: [],
            },
          },
          old: {
            id: 'old',
            user: 'old',
            data: {
              education: {
                establishment: 'string',
                profession: 'string',
              },
              foreignLanguage: [],
              general: {
                firstName: 'string',
                lastName: 'string',
                name: 'string',
              },
              projects: [],
              resume: {
                content: 'string',
              },
              skills: [],
            },
          },
        },
        isInitVirtualCVs: true,
        activeEmployee: '',
      };

      const action = createVirtualCVSuccessAction({ virtualCV: virtualCv });
      const state = virtualCVReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('getVirtualCVByIdSuccessAction', () => {
    it('should set updated virtualCv in state', () => {
      const virtualCv: VirtualCV = {
        id: 'id',
        user: 'new',
        data: {
          education: {
            establishment: 'string',
            profession: 'string',
          },
          foreignLanguage: [],
          general: {
            firstName: 'string',
            lastName: 'string',
            name: 'string',
          },
          projects: [],
          resume: {
            content: 'string',
          },
          skills: [],
        },
      };
      const oldState: VirtualCVState = {
        virtualCVs: {
          id: {
            id: 'id',
            user: 'old',
            data: {
              education: {
                establishment: 'string',
                profession: 'string',
              },
              foreignLanguage: [],
              general: {
                firstName: 'string',
                lastName: 'string',
                name: 'string',
              },
              projects: [],
              resume: {
                content: 'string',
              },
              skills: [],
            },
          },
        },
        isInitVirtualCVs: true,
        activeEmployee: '',
      };
      const newState: VirtualCVState = {
        virtualCVs: {
          id: {
            id: 'id',
            user: 'new',
            data: {
              education: {
                establishment: 'string',
                profession: 'string',
              },
              foreignLanguage: [],
              general: {
                firstName: 'string',
                lastName: 'string',
                name: 'string',
              },
              projects: [],
              resume: {
                content: 'string',
              },
              skills: [],
            },
          },
        },
        isInitVirtualCVs: true,
        activeEmployee: '',
      };
      const action = getVirtualCVByIdSuccessAction({ virtualCV: virtualCv });
      const state = virtualCVReducer(oldState, action);
      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
    it('should set new virtualCv in state', () => {
      const virtualCv: VirtualCV = {
        id: 'id',
        user: 'new',
        data: {
          education: {
            establishment: 'string',
            profession: 'string',
          },
          foreignLanguage: [],
          general: {
            firstName: 'string',
            lastName: 'string',
            name: 'string',
          },
          projects: [],
          resume: {
            content: 'string',
          },
          skills: [],
        },
      };
      const oldState: VirtualCVState = {
        virtualCVs: {
          old: {
            id: 'old',
            user: 'old',
            data: {
              education: {
                establishment: 'string',
                profession: 'string',
              },
              foreignLanguage: [],
              general: {
                firstName: 'string',
                lastName: 'string',
                name: 'string',
              },
              projects: [],
              resume: {
                content: 'string',
              },
              skills: [],
            },
          },
        },
        isInitVirtualCVs: true,
        activeEmployee: '',
      };
      const newState: VirtualCVState = {
        virtualCVs: {
          id: {
            id: 'id',
            user: 'new',
            data: {
              education: {
                establishment: 'string',
                profession: 'string',
              },
              foreignLanguage: [],
              general: {
                firstName: 'string',
                lastName: 'string',
                name: 'string',
              },
              projects: [],
              resume: {
                content: 'string',
              },
              skills: [],
            },
          },
          old: {
            id: 'old',
            user: 'old',
            data: {
              education: {
                establishment: 'string',
                profession: 'string',
              },
              foreignLanguage: [],
              general: {
                firstName: 'string',
                lastName: 'string',
                name: 'string',
              },
              projects: [],
              resume: {
                content: 'string',
              },
              skills: [],
            },
          },
        },
        isInitVirtualCVs: true,
        activeEmployee: '',
      };

      const action = getVirtualCVByIdSuccessAction({ virtualCV: virtualCv });
      const state = virtualCVReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('activateEmployeeAction', () => {
    it('should set activate employee', () => {
      const activeEmployee = 'new';

      const newState: VirtualCVState = {
        virtualCVs: {},
        isInitVirtualCVs: false,
        activeEmployee: 'new',
      };

      const action = activateEmployeeAction({ id: activeEmployee });
      const state = virtualCVReducer(initialVirtualCVsState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialVirtualCVsState);
    });
  });

  describe('clearActivateEmployeeAction', () => {
    it('should clear active employee', () => {
      const oldState: VirtualCVState = {
        virtualCVs: {},
        isInitVirtualCVs: false,
        activeEmployee: 'old',
      };
      const newState: VirtualCVState = {
        virtualCVs: {},
        isInitVirtualCVs: false,
        activeEmployee: '',
      };

      const action = clearActivateEmployeeAction;
      const state = virtualCVReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
});
