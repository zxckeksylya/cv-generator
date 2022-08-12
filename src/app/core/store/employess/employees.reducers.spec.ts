import {
  clearEmployeesStoreAction,
  getEmployeesSuccessAction,
  createEmployeeSuccessAction,
} from './employees.actions';
import { employeesReducer, initialEmployeesState, EmployeesState } from './employees.reducers';
import { GetEmployee } from '../../interfaces/employee.interface';
import { getEmployeeByIdSuccessAction } from './employees.actions';

describe('employeesReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = employeesReducer(initialEmployeesState, action);

      expect(state).toBe(initialEmployeesState);
    });
  });

  describe('clearEmployeesStoreAction', () => {
    it('should clear state', () => {
      const action = clearEmployeesStoreAction;
      const state = employeesReducer(initialEmployeesState, action);

      expect(state).toEqual(initialEmployeesState);
    });
  });

  describe('getEmployeesSuccessAction', () => {
    it('should set employees in state', () => {
      const employees: GetEmployee[] = [
        {
          id: 'id',
          lastName: 'name',
          firstName: 'firstName',
          email: 'string',
          department: 'string',
          diplomaProfession: 'string',
          institution: 'string',
          languages: [],
          skills: [],
          role: { id: 'id', name: 'name' },
        },
      ];
      const newState: EmployeesState = {
        employees: {
          id: {
            id: 'id',
            lastName: 'name',
            firstName: 'firstName',
            email: 'string',
            department: 'string',
            diplomaProfession: 'string',
            institution: 'string',
            languages: [],
            skills: [],
            role: { id: 'id', name: 'name' },
          },
        },
        isInitEmployees: true,
        activatedEmployee: '',
      };
      const action = getEmployeesSuccessAction({ employees });
      const state = employeesReducer(initialEmployeesState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialEmployeesState);
    });
  });

  describe('createEmployeeSuccessAction', () => {
    it('should set created employee in state', () => {
      const employee: GetEmployee = {
        id: 'id',
        lastName: 'name',
        firstName: 'firstName',
        email: 'string',
        department: 'string',
        diplomaProfession: 'string',
        institution: 'string',
        languages: [],
        skills: [],
        role: { id: 'id', name: 'name' },
      };
      const oldState: EmployeesState = {
        employees: {
          old: {
            id: 'old',
            lastName: 'old',
            firstName: 'firstName',
            email: 'string',
            department: 'string',
            diplomaProfession: 'string',
            institution: 'string',
            languages: [],
            skills: [],
            role: { id: 'id', name: 'name' },
          },
        },
        isInitEmployees: true,
        activatedEmployee: '',
      };
      const newState: EmployeesState = {
        employees: {
          id: {
            id: 'id',
            lastName: 'name',
            firstName: 'firstName',
            email: 'string',
            department: 'string',
            diplomaProfession: 'string',
            institution: 'string',
            languages: [],
            skills: [],
            role: { id: 'id', name: 'name' },
          },
          old: {
            id: 'old',
            lastName: 'old',
            firstName: 'firstName',
            email: 'string',
            department: 'string',
            diplomaProfession: 'string',
            institution: 'string',
            languages: [],
            skills: [],
            role: { id: 'id', name: 'name' },
          },
        },
        isInitEmployees: true,
        activatedEmployee: '',
      };
      const action = createEmployeeSuccessAction({ employee });
      const state = employeesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('getEmployeeByIdSuccessAction', () => {
    it('should set updated employee in state', () => {
      const employee: GetEmployee = {
        id: 'id',
        lastName: 'new',
        firstName: 'firstName',
        email: 'string',
        department: 'string',
        diplomaProfession: 'string',
        institution: 'string',
        languages: [],
        skills: [],
        role: { id: 'id', name: 'name' },
      };
      const oldState: EmployeesState = {
        employees: {
          id: {
            id: 'id',
            lastName: 'old',
            firstName: 'firstName',
            email: 'string',
            department: 'string',
            diplomaProfession: 'string',
            institution: 'string',
            languages: [],
            skills: [],
            role: { id: 'id', name: 'name' },
          },
        },
        isInitEmployees: true,
        activatedEmployee: '',
      };
      const newState: EmployeesState = {
        employees: {
          id: {
            id: 'id',
            lastName: 'new',
            firstName: 'firstName',
            email: 'string',
            department: 'string',
            diplomaProfession: 'string',
            institution: 'string',
            languages: [],
            skills: [],
            role: { id: 'id', name: 'name' },
          },
        },
        isInitEmployees: true,
        activatedEmployee: '',
      };

      const action = getEmployeeByIdSuccessAction({ employee });
      const state = employeesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
    it('should set new employee in state', () => {
      const employee: GetEmployee = {
        id: 'id',
        lastName: 'new',
        firstName: 'firstName',
        email: 'string',
        department: 'string',
        diplomaProfession: 'string',
        institution: 'string',
        languages: [],
        skills: [],
        role: { id: 'id', name: 'name' },
      };
      const oldState: EmployeesState = {
        employees: {
          old: {
            id: 'old',
            lastName: 'old',
            firstName: 'firstName',
            email: 'string',
            department: 'string',
            diplomaProfession: 'string',
            institution: 'string',
            languages: [],
            skills: [],
            role: { id: 'id', name: 'name' },
          },
        },
        isInitEmployees: true,
        activatedEmployee: '',
      };
      const newState: EmployeesState = {
        employees: {
          id: {
            id: 'id',
            lastName: 'new',
            firstName: 'firstName',
            email: 'string',
            department: 'string',
            diplomaProfession: 'string',
            institution: 'string',
            languages: [],
            skills: [],
            role: { id: 'id', name: 'name' },
          },
          old: {
            id: 'old',
            lastName: 'old',
            firstName: 'firstName',
            email: 'string',
            department: 'string',
            diplomaProfession: 'string',
            institution: 'string',
            languages: [],
            skills: [],
            role: { id: 'id', name: 'name' },
          },
        },
        isInitEmployees: true,
        activatedEmployee: '',
      };

      const action = getEmployeeByIdSuccessAction({ employee });
      const state = employeesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
});
