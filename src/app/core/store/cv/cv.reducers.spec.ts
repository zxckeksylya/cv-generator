import { CV } from '../../interfaces/cv.interface';
import {
  clearCVStoreAction,
  createCVSuccessAction,
  getCVByIdSuccessAction,
  getCVsSuccessAction,
} from './cv.actions';
import { cvReducer, CVState, initialCVState } from './cv.reducers';

fdescribe('cvReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = cvReducer(initialCVState, action);

      expect(state).toBe(initialCVState);
    });
  });

  describe('clearCVStoreAction', () => {
    it('should clear state', () => {
      const action = clearCVStoreAction();
      const state = cvReducer(initialCVState, action);

      expect(state).toEqual(initialCVState);
    });
  });

  describe('getCVsSuccessAction', () => {
    it('should set cvs in state', () => {
      const cvs: CV[] = [
        {
          id: 'id',
          name: 'name',
          user: {
            id: 'id',
            languages: [],
            lastName: 'string',
            firstName: 'string',
            skills: [],
            email: 'string',
            institution: 'string',
            department: 'string',
            diplomaProfession: 'string',
            role: {
              id: 'id',
              name: 'string',
            },
          },
          projects: [],
          description: 'string',
          createdAt: 'string',
          updatedAt: 'string',
        },
      ];
      const newState: CVState = {
        cvs: {
          id: {
            id: 'id',
            name: 'name',
            user: {
              id: 'id',
              languages: [],
              lastName: 'string',
              firstName: 'string',
              skills: [],
              email: 'string',
              institution: 'string',
              department: 'string',
              diplomaProfession: 'string',
              role: {
                id: 'id',
                name: 'string',
              },
            },
            projects: [],
            description: 'string',
            createdAt: 'string',
            updatedAt: 'string',
          },
        },
        isInitCVs: true,
      };
      const action = getCVsSuccessAction({ cvs });
      const state = cvReducer(initialCVState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialCVState);
    });
  });

  describe('createCVSuccessAction', () => {
    it('should set created cv in state', () => {
      const cv: CV = {
        id: 'id',
        name: 'name',
        user: {
          id: 'id',
          languages: [],
          lastName: 'string',
          firstName: 'string',
          skills: [],
          email: 'string',
          institution: 'string',
          department: 'string',
          diplomaProfession: 'string',
          role: {
            id: 'id',
            name: 'string',
          },
        },
        projects: [],
        description: 'string',
        createdAt: 'string',
        updatedAt: 'string',
      };

      const oldState: CVState = {
        cvs: {
          old: {
            id: 'old',
            name: 'old',
            user: {
              id: 'id',
              languages: [],
              lastName: 'string',
              firstName: 'string',
              skills: [],
              email: 'string',
              institution: 'string',
              department: 'string',
              diplomaProfession: 'string',
              role: {
                id: 'id',
                name: 'string',
              },
            },
            projects: [],
            description: 'string',
            createdAt: 'string',
            updatedAt: 'string',
          },
        },
        isInitCVs: true,
      };
      const newState: CVState = {
        cvs: {
          id: {
            id: 'id',
            name: 'name',
            user: {
              id: 'id',
              languages: [],
              lastName: 'string',
              firstName: 'string',
              skills: [],
              email: 'string',
              institution: 'string',
              department: 'string',
              diplomaProfession: 'string',
              role: {
                id: 'id',
                name: 'string',
              },
            },
            projects: [],
            description: 'string',
            createdAt: 'string',
            updatedAt: 'string',
          },
          old: {
            id: 'old',
            name: 'old',
            user: {
              id: 'id',
              languages: [],
              lastName: 'string',
              firstName: 'string',
              skills: [],
              email: 'string',
              institution: 'string',
              department: 'string',
              diplomaProfession: 'string',
              role: {
                id: 'id',
                name: 'string',
              },
            },
            projects: [],
            description: 'string',
            createdAt: 'string',
            updatedAt: 'string',
          },
        },
        isInitCVs: true,
      };
      const action = createCVSuccessAction({ cv });
      const state = cvReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('getCVByIdSuccessAction', () => {
    it('should set updated cv in state', () => {
      const cv: CV = {
        id: 'id',
        name: 'newName',
        user: {
          id: 'id',
          languages: [],
          lastName: 'string',
          firstName: 'string',
          skills: [],
          email: 'string',
          institution: 'string',
          department: 'string',
          diplomaProfession: 'string',
          role: {
            id: 'id',
            name: 'string',
          },
        },
        projects: [],
        description: 'string',
        createdAt: 'string',
        updatedAt: 'string',
      };
      const oldState: CVState = {
        cvs: {
          id: {
            id: 'id',
            name: 'name',
            user: {
              id: 'id',
              languages: [],
              lastName: 'string',
              firstName: 'string',
              skills: [],
              email: 'string',
              institution: 'string',
              department: 'string',
              diplomaProfession: 'string',
              role: {
                id: 'id',
                name: 'string',
              },
            },
            projects: [],
            description: 'string',
            createdAt: 'string',
            updatedAt: 'string',
          },
        },
        isInitCVs: true,
      };
      const newState: CVState = {
        cvs: {
          id: {
            id: 'id',
            name: 'newName',
            user: {
              id: 'id',
              languages: [],
              lastName: 'string',
              firstName: 'string',
              skills: [],
              email: 'string',
              institution: 'string',
              department: 'string',
              diplomaProfession: 'string',
              role: {
                id: 'id',
                name: 'string',
              },
            },
            projects: [],
            description: 'string',
            createdAt: 'string',
            updatedAt: 'string',
          },
        },
        isInitCVs: true,
      };
      const action = getCVByIdSuccessAction({ cv });
      const state = cvReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
    it('should set new cv in state', () => {
      const cv: CV = {
        id: 'id',
        name: 'newName',
        user: {
          id: 'id',
          languages: [],
          lastName: 'string',
          firstName: 'string',
          skills: [],
          email: 'string',
          institution: 'string',
          department: 'string',
          diplomaProfession: 'string',
          role: {
            id: 'id',
            name: 'string',
          },
        },
        projects: [],
        description: 'string',
        createdAt: 'string',
        updatedAt: 'string',
      };
      const oldState: CVState = {
        cvs: {
          old: {
            id: 'old',
            name: 'old',
            user: {
              id: 'id',
              languages: [],
              lastName: 'string',
              firstName: 'string',
              skills: [],
              email: 'string',
              institution: 'string',
              department: 'string',
              diplomaProfession: 'string',
              role: {
                id: 'id',
                name: 'string',
              },
            },
            projects: [],
            description: 'string',
            createdAt: 'string',
            updatedAt: 'string',
          },
        },
        isInitCVs: true,
      };
      const newState: CVState = {
        cvs: {
          id: {
            id: 'id',
            name: 'newName',
            user: {
              id: 'id',
              languages: [],
              lastName: 'string',
              firstName: 'string',
              skills: [],
              email: 'string',
              institution: 'string',
              department: 'string',
              diplomaProfession: 'string',
              role: {
                id: 'id',
                name: 'string',
              },
            },
            projects: [],
            description: 'string',
            createdAt: 'string',
            updatedAt: 'string',
          },
          old: {
            id: 'old',
            name: 'old',
            user: {
              id: 'id',
              languages: [],
              lastName: 'string',
              firstName: 'string',
              skills: [],
              email: 'string',
              institution: 'string',
              department: 'string',
              diplomaProfession: 'string',
              role: {
                id: 'id',
                name: 'string',
              },
            },
            projects: [],
            description: 'string',
            createdAt: 'string',
            updatedAt: 'string',
          },
        },
        isInitCVs: true,
      };

      const action = getCVByIdSuccessAction({ cv });
      const state = cvReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
});
