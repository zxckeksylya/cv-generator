import { GetProject } from '../../interfaces/project.interface';
import { ProjectsState } from './projects.reducers';
import {
  getIsInitProjectsSelector,
  getProjectByIdSelector,
  getProjectsByProjectRoleIdSelector,
  getProjectsByResponsibilityIdSelector,
  getProjectsBySpecializationIdSelector,
  getProjectsSelector,
} from './projects.selectors';

describe('projectsSelectors', () => {
  const state: ProjectsState = {
    projects: {
      id0: {
        id: 'id0',
        name: 'name0',
        secondName: 'string',
        startDate: 'string',
        endDate: 'string',
        specializations: [
          {
            id: 'id',
            name: 'name',
          },
        ],
        responsibilities: [],
        projectRoles: [],
        teamSize: 0,
        tasksPerformed: 'string',
        description: 'string',
      },
      id1: {
        id: 'id1',
        name: 'name1',
        secondName: 'string',
        startDate: 'string',
        endDate: 'string',
        specializations: [],
        responsibilities: [
          {
            id: 'id',
            name: 'name',
          },
        ],
        projectRoles: [],
        teamSize: 0,
        tasksPerformed: 'string',
        description: 'string',
      },
      id2: {
        id: 'id2',
        name: 'name2',
        secondName: 'string',
        startDate: 'string',
        endDate: 'string',
        specializations: [],
        responsibilities: [],
        projectRoles: [
          {
            id: 'id',
            name: 'name',
          },
        ],
        teamSize: 0,
        tasksPerformed: 'string',
        description: 'string',
      },
    },
    isInitProjects: true,
  };

  it('should return projects list', () => {
    const projects: GetProject[] = [
      {
        id: 'id0',
        name: 'name0',
        secondName: 'string',
        startDate: 'string',
        endDate: 'string',
        specializations: [
          {
            id: 'id',
            name: 'name',
          },
        ],
        responsibilities: [],
        projectRoles: [],
        teamSize: 0,
        tasksPerformed: 'string',
        description: 'string',
      },
      {
        id: 'id1',
        name: 'name1',
        secondName: 'string',
        startDate: 'string',
        endDate: 'string',
        specializations: [],
        responsibilities: [
          {
            id: 'id',
            name: 'name',
          },
        ],
        projectRoles: [],
        teamSize: 0,
        tasksPerformed: 'string',
        description: 'string',
      },
      {
        id: 'id2',
        name: 'name2',
        secondName: 'string',
        startDate: 'string',
        endDate: 'string',
        specializations: [],
        responsibilities: [],
        projectRoles: [
          {
            id: 'id',
            name: 'name',
          },
        ],
        teamSize: 0,
        tasksPerformed: 'string',
        description: 'string',
      },
    ];

    const result = getProjectsSelector.projector(state);

    expect(result).toEqual(projects);
  });

  it('should return isInit', () => {
    const result = getIsInitProjectsSelector.projector(state);

    expect(result).toEqual(state.isInitProjects);
  });

  it('should return project by id', () => {
    const id = 'id0';
    const project: GetProject = {
      id: 'id0',
      name: 'name0',
      secondName: 'string',
      startDate: 'string',
      endDate: 'string',
      specializations: [
        {
          id: 'id',
          name: 'name',
        },
      ],
      responsibilities: [],
      projectRoles: [],
      teamSize: 0,
      tasksPerformed: 'string',
      description: 'string',
    };
    const result = getProjectByIdSelector.projector(state, { id });

    expect(result).toEqual(project);
  });

  it('should return projects by responsibility id', () => {
    const id = 'id';
    const projects: GetProject[] = [
      {
        id: 'id1',
        name: 'name1',
        secondName: 'string',
        startDate: 'string',
        endDate: 'string',
        specializations: [],
        responsibilities: [
          {
            id: 'id',
            name: 'name',
          },
        ],
        projectRoles: [],
        teamSize: 0,
        tasksPerformed: 'string',
        description: 'string',
      },
    ];

    const result = getProjectsByResponsibilityIdSelector.projector(state, { id });

    expect(result).toEqual(projects);
  });

  it('should return projects by specialization id', () => {
    const id = 'id';
    const projects: GetProject[] = [
      {
        id: 'id0',
        name: 'name0',
        secondName: 'string',
        startDate: 'string',
        endDate: 'string',
        specializations: [
          {
            id: 'id',
            name: 'name',
          },
        ],
        responsibilities: [],
        projectRoles: [],
        teamSize: 0,
        tasksPerformed: 'string',
        description: 'string',
      },
    ];

    const result = getProjectsBySpecializationIdSelector.projector(state, { id });

    expect(result).toEqual(projects);
  });

  it('should return projects by project-role id', () => {
    const id = 'id';
    const projects: GetProject[] = [
      {
        id: 'id2',
        name: 'name2',
        secondName: 'string',
        startDate: 'string',
        endDate: 'string',
        specializations: [],
        responsibilities: [],
        projectRoles: [
          {
            id: 'id',
            name: 'name',
          },
        ],
        teamSize: 0,
        tasksPerformed: 'string',
        description: 'string',
      },
    ];

    const result = getProjectsByProjectRoleIdSelector.projector(state, { id });

    expect(result).toEqual(projects);
  });
});
