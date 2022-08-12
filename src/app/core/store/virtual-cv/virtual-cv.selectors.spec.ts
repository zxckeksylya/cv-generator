import { VirtualCV } from '../../interfaces/virtual-cv.interface';
import { VirtualCVState } from './virtual-cv.reducers';
import { getVirtualCVsByEmployeeIdSelector } from './virtual-cv.selectors';
import {
  getIsInitVirtualCVsSelector,
  getVirtualCvByIdSelector,
  getVirtualCVsSelector,
} from './virtual-cv.selectors';

describe('virtualCVSelectors', () => {
  const state: VirtualCVState = {
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
    activeEmployee: '',
    isInitVirtualCVs: true,
  };

  it('should return virtual-cvs list', () => {
    const virtualCVs: VirtualCV[] = [
      {
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
      {
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
    ];

    const result = getVirtualCVsSelector.projector(state);

    expect(result).toEqual(virtualCVs);
  });

  it('should return isInit', () => {
    const result = getIsInitVirtualCVsSelector.projector(state);
    expect(result).toEqual(state.isInitVirtualCVs);
  });

  it('should return virtualCv by id', () => {
    const id = 'id';
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

    const result = getVirtualCvByIdSelector.projector(state, { id });
    expect(result).toEqual(virtualCv);
  });

  it('should return virtual cvs by employee id', () => {
    const id = 'new';
    const virtualCvs: VirtualCV[] = [
      {
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
    ];

    const result = getVirtualCVsByEmployeeIdSelector.projector(state, { id });

    expect(result).toEqual(virtualCvs);
  });
});
