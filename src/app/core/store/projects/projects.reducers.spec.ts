import { GetProject } from '../../interfaces/project.interface';
import {
  clearProjectsStoreAction,
  createProjectSuccessAction,
  deleteProjectSuccessAction,
  getProjectByIdSuccessAction,
  getProjectsSuccessAction,
} from './projects.actions';
import { initialProjectsState, projectsReducer, ProjectsState } from './projects.reducers';

describe('projectsReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = projectsReducer(initialProjectsState, action);

      expect(state).toBe(initialProjectsState);
    });
  });

  describe('clearProjectsStoreAction', () => {
    it('should clear state', () => {
      const action = clearProjectsStoreAction;
      const state = projectsReducer(initialProjectsState, action);

      expect(state).toEqual(initialProjectsState);
    });
  });

  describe('getProjectsSuccessAction', () => {
    it('should set projects in state', () => {
      const projects: GetProject[] = [
        {
          id: 'id',
          name: 'name',
          secondName: 'string',
          startDate: 'string',
          endDate: 'string',
          specializations: [],
          responsibilities: [],
          projectRoles: [],
          teamSize: 0,
          tasksPerformed: 'string',
          description: 'string',
        },
      ];
      const newState: ProjectsState = {
        projects: {
          id: {
            id: 'id',
            name: 'name',
            secondName: 'string',
            startDate: 'string',
            endDate: 'string',
            specializations: [],
            responsibilities: [],
            projectRoles: [],
            teamSize: 0,
            tasksPerformed: 'string',
            description: 'string',
          },
        },
        isInitProjects: true,
      };
      const action = getProjectsSuccessAction({ projects });
      const state = projectsReducer(initialProjectsState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialProjectsState);
    });
  });

  describe('createProjectSuccessAction', () => {
    it('should set created project in state', () => {
      const project: GetProject = {
        id: 'id',
        name: 'name',
        secondName: 'string',
        startDate: 'string',
        endDate: 'string',
        specializations: [],
        responsibilities: [],
        projectRoles: [],
        teamSize: 0,
        tasksPerformed: 'string',
        description: 'string',
      };
      const oldState: ProjectsState = {
        projects: {
          old: {
            id: 'old',
            name: 'name',
            secondName: 'string',
            startDate: 'string',
            endDate: 'string',
            specializations: [],
            responsibilities: [],
            projectRoles: [],
            teamSize: 0,
            tasksPerformed: 'string',
            description: 'string',
          },
        },
        isInitProjects: true,
      };
      const newState: ProjectsState = {
        projects: {
          id: {
            id: 'id',
            name: 'name',
            secondName: 'string',
            startDate: 'string',
            endDate: 'string',
            specializations: [],
            responsibilities: [],
            projectRoles: [],
            teamSize: 0,
            tasksPerformed: 'string',
            description: 'string',
          },
          old: {
            id: 'old',
            name: 'name',
            secondName: 'string',
            startDate: 'string',
            endDate: 'string',
            specializations: [],
            responsibilities: [],
            projectRoles: [],
            teamSize: 0,
            tasksPerformed: 'string',
            description: 'string',
          },
        },
        isInitProjects: true,
      };
      const action = createProjectSuccessAction({ project });
      const state = projectsReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('getProjectByIdSuccessAction', () => {
    it('should set updated project in state', () => {
      const project: GetProject = {
        id: 'id',
        name: 'new',
        secondName: 'string',
        startDate: 'string',
        endDate: 'string',
        specializations: [],
        responsibilities: [],
        projectRoles: [],
        teamSize: 0,
        tasksPerformed: 'string',
        description: 'string',
      };
      const oldState: ProjectsState = {
        projects: {
          id: {
            id: 'id',
            name: 'old',
            secondName: 'string',
            startDate: 'string',
            endDate: 'string',
            specializations: [],
            responsibilities: [],
            projectRoles: [],
            teamSize: 0,
            tasksPerformed: 'string',
            description: 'string',
          },
        },
        isInitProjects: true,
      };
      const newState: ProjectsState = {
        projects: {
          id: {
            id: 'id',
            name: 'new',
            secondName: 'string',
            startDate: 'string',
            endDate: 'string',
            specializations: [],
            responsibilities: [],
            projectRoles: [],
            teamSize: 0,
            tasksPerformed: 'string',
            description: 'string',
          },
        },
        isInitProjects: true,
      };
      const action = getProjectByIdSuccessAction({ project });
      const state = projectsReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
    it('should set new project in state', () => {
      const project: GetProject = {
        id: 'id',
        name: 'new',
        secondName: 'string',
        startDate: 'string',
        endDate: 'string',
        specializations: [],
        responsibilities: [],
        projectRoles: [],
        teamSize: 0,
        tasksPerformed: 'string',
        description: 'string',
      };
      const oldState: ProjectsState = {
        projects: {
          old: {
            id: 'old',
            name: 'old',
            secondName: 'string',
            startDate: 'string',
            endDate: 'string',
            specializations: [],
            responsibilities: [],
            projectRoles: [],
            teamSize: 0,
            tasksPerformed: 'string',
            description: 'string',
          },
        },
        isInitProjects: true,
      };
      const newState: ProjectsState = {
        projects: {
          id: {
            id: 'id',
            name: 'new',
            secondName: 'string',
            startDate: 'string',
            endDate: 'string',
            specializations: [],
            responsibilities: [],
            projectRoles: [],
            teamSize: 0,
            tasksPerformed: 'string',
            description: 'string',
          },
          old: {
            id: 'old',
            name: 'old',
            secondName: 'string',
            startDate: 'string',
            endDate: 'string',
            specializations: [],
            responsibilities: [],
            projectRoles: [],
            teamSize: 0,
            tasksPerformed: 'string',
            description: 'string',
          },
        },
        isInitProjects: true,
      };

      const action = getProjectByIdSuccessAction({ project });
      const state = projectsReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('deleteProjectSuccessAction', () => {
    it('should delete project in state', () => {
      const project: GetProject = {
        id: 'old',
        name: 'old',
        secondName: 'string',
        startDate: 'string',
        endDate: 'string',
        specializations: [],
        responsibilities: [],
        projectRoles: [],
        teamSize: 0,
        tasksPerformed: 'string',
        description: 'string',
      };
      const oldState: ProjectsState = {
        projects: {
          old: {
            id: 'old',
            name: 'old',
            secondName: 'string',
            startDate: 'string',
            endDate: 'string',
            specializations: [],
            responsibilities: [],
            projectRoles: [],
            teamSize: 0,
            tasksPerformed: 'string',
            description: 'string',
          },
          id: {
            id: 'id',
            name: 'name',
            secondName: 'string',
            startDate: 'string',
            endDate: 'string',
            specializations: [],
            responsibilities: [],
            projectRoles: [],
            teamSize: 0,
            tasksPerformed: 'string',
            description: 'string',
          },
        },
        isInitProjects: true,
      };

      const newState: ProjectsState = {
        projects: {
          id: {
            id: 'id',
            name: 'name',
            secondName: 'string',
            startDate: 'string',
            endDate: 'string',
            specializations: [],
            responsibilities: [],
            projectRoles: [],
            teamSize: 0,
            tasksPerformed: 'string',
            description: 'string',
          },
        },
        isInitProjects: true,
      };

      const action = deleteProjectSuccessAction({ id: project.id });
      const state = projectsReducer(oldState, action);
      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
});
