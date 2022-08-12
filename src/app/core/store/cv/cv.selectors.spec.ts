import { CV } from '../../interfaces/cv.interface';
import { CVState } from './cv.reducers';
import {
  getCVByIdSelector,
  getCVsByEmployeeIdSelector,
  getCVSelector,
  getIsInitCVsSelector,
} from './cv.selectors';

describe('cvSelectors', () => {
  const state: CVState = {
    cvs: {
      id0: {
        id: 'id0',
        createdAt: 'string',
        updatedAt: 'string',
        description: 'string',
        name: 'name',
        projects: [],
        user: {
          department: 'string',
          diplomaProfession: 'string',
          email: 'string',
          firstName: 'string',
          id: 'id',
          institution: 'string',
          languages: [],
          lastName: 'string',
          role: {
            id: 'id',
            name: 'name',
          },
          skills: [],
        },
      },
      id1: {
        id: 'id1',
        createdAt: 'string',
        updatedAt: 'string',
        description: 'string',
        name: 'name',
        projects: [],
        user: {
          department: 'string',
          diplomaProfession: 'string',
          email: 'string',
          firstName: 'string',
          id: 'id',
          institution: 'string',
          languages: [],
          lastName: 'string',
          role: {
            id: 'id',
            name: 'name',
          },
          skills: [],
        },
      },
      id2: {
        id: 'id2',
        createdAt: 'string',
        updatedAt: 'string',
        description: 'string',
        name: 'name',
        projects: [],
        user: {
          department: 'string',
          diplomaProfession: 'string',
          email: 'string',
          firstName: 'string',
          id: 'id1',
          institution: 'string',
          languages: [],
          lastName: 'string',
          role: {
            id: 'id',
            name: 'name',
          },
          skills: [],
        },
      },
    },
    isInitCVs: true,
  };

  it('should return cvs array', () => {
    const cvs: CV[] = [
      {
        id: 'id0',
        createdAt: 'string',
        updatedAt: 'string',
        description: 'string',
        name: 'name',
        projects: [],
        user: {
          department: 'string',
          diplomaProfession: 'string',
          email: 'string',
          firstName: 'string',
          id: 'id',
          institution: 'string',
          languages: [],
          lastName: 'string',
          role: {
            id: 'id',
            name: 'name',
          },
          skills: [],
        },
      },
      {
        id: 'id1',
        createdAt: 'string',
        updatedAt: 'string',
        description: 'string',
        name: 'name',
        projects: [],
        user: {
          department: 'string',
          diplomaProfession: 'string',
          email: 'string',
          firstName: 'string',
          id: 'id',
          institution: 'string',
          languages: [],
          lastName: 'string',
          role: {
            id: 'id',
            name: 'name',
          },
          skills: [],
        },
      },
      {
        id: 'id2',
        createdAt: 'string',
        updatedAt: 'string',
        description: 'string',
        name: 'name',
        projects: [],
        user: {
          department: 'string',
          diplomaProfession: 'string',
          email: 'string',
          firstName: 'string',
          id: 'id1',
          institution: 'string',
          languages: [],
          lastName: 'string',
          role: {
            id: 'id',
            name: 'name',
          },
          skills: [],
        },
      },
    ];

    const result = getCVSelector.projector(state);

    expect(result).toEqual(cvs);
  });

  it('should return isInit', () => {
    const result = getIsInitCVsSelector.projector(state);

    expect(result).toEqual(state.isInitCVs);
  });

  it('should return cv by id', () => {
    const id = 'id0';
    const cv: CV = {
      id,
      createdAt: 'string',
      updatedAt: 'string',
      description: 'string',
      name: 'name',
      projects: [],
      user: {
        department: 'string',
        diplomaProfession: 'string',
        email: 'string',
        firstName: 'string',
        id: 'id',
        institution: 'string',
        languages: [],
        lastName: 'string',
        role: {
          id: 'id',
          name: 'name',
        },
        skills: [],
      },
    };

    const result = getCVByIdSelector.projector(state, { id });
    expect(result).toEqual(cv);
  });

  describe('getCVsByEmployeeIdSelector', () => {
    it('should return cvs by employee id', () => {
      const id = 'id';
      const cvs: CV[] = [
        {
          id: 'id0',
          createdAt: 'string',
          updatedAt: 'string',
          description: 'string',
          name: 'name',
          projects: [],
          user: {
            department: 'string',
            diplomaProfession: 'string',
            email: 'string',
            firstName: 'string',
            id: 'id',
            institution: 'string',
            languages: [],
            lastName: 'string',
            role: {
              id: 'id',
              name: 'name',
            },
            skills: [],
          },
        },
        {
          id: 'id1',
          createdAt: 'string',
          updatedAt: 'string',
          description: 'string',
          name: 'name',
          projects: [],
          user: {
            department: 'string',
            diplomaProfession: 'string',
            email: 'string',
            firstName: 'string',
            id: 'id',
            institution: 'string',
            languages: [],
            lastName: 'string',
            role: {
              id: 'id',
              name: 'name',
            },
            skills: [],
          },
        },
      ];

      const result = getCVsByEmployeeIdSelector.projector(state, { id });
      expect(result).toEqual(cvs);
    });
  });
});
