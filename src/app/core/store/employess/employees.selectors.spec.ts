import { GetEmployee } from '../../interfaces/employee.interface';
import { EmployeesState } from './employees.reducers';
import {
  getActiveEmployeeSelector,
  getEmployeeByIdSelector,
  getEmployeeByRoleIdSelector,
  getEmployeesByLanguageIdSelector,
  getEmployeesBySkillIdSelector,
  getEmployeesSelector,
  getIsInitEmployeesSelector,
} from './employees.selectors';

describe('employeesSelectors', () => {
  const state: EmployeesState = {
    employees: {
      id: {
        id: 'id',
        lastName: 'name',
        firstName: 'firstName',
        email: 'string',
        department: 'string',
        diplomaProfession: 'string',
        institution: 'string',
        languages: [
          {
            id: 'id',
            name: 'name',
            everydayReadingLevel: {
              id: 'id',
              name: 'name',
            },
            everydaySpeakingLevel: {
              id: 'id',
              name: 'name',
            },
            everydayWritingLevel: {
              id: 'id',
              name: 'name',
            },
            professionalReadingLevel: {
              id: 'id',
              name: 'name',
            },
            professionalSpeakingLevel: {
              id: 'id',
              name: 'name',
            },
            professionalWritingLevel: {
              id: 'id',
              name: 'name',
            },
          },
        ],
        skills: [],
        role: { id: 'id', name: 'name' },
      },
      active: {
        id: 'active',
        lastName: 'name',
        firstName: 'active',
        email: 'string',
        department: 'string',
        diplomaProfession: 'string',
        institution: 'string',
        languages: [],
        skills: [
          {
            id: 'id',
            name: 'id',
            experience: 0,
            lastUsed: 0,
            category: {
              id: 'id',
              name: 'name',
            },
            level: {
              id: 'id',
              name: 'name',
            },
          },
        ],
        role: { id: 'id', name: 'name' },
      },
    },
    isInitEmployees: true,
    activatedEmployee: 'active',
  };

  it('should return employees list', () => {
    const employees: GetEmployee[] = [
      {
        id: 'id',
        lastName: 'name',
        firstName: 'firstName',
        email: 'string',
        department: 'string',
        diplomaProfession: 'string',
        institution: 'string',
        languages: [
          {
            id: 'id',
            name: 'name',
            everydayReadingLevel: {
              id: 'id',
              name: 'name',
            },
            everydaySpeakingLevel: {
              id: 'id',
              name: 'name',
            },
            everydayWritingLevel: {
              id: 'id',
              name: 'name',
            },
            professionalReadingLevel: {
              id: 'id',
              name: 'name',
            },
            professionalSpeakingLevel: {
              id: 'id',
              name: 'name',
            },
            professionalWritingLevel: {
              id: 'id',
              name: 'name',
            },
          },
        ],
        skills: [],
        role: { id: 'id', name: 'name' },
      },
      {
        id: 'active',
        lastName: 'name',
        firstName: 'active',
        email: 'string',
        department: 'string',
        diplomaProfession: 'string',
        institution: 'string',
        languages: [],
        skills: [
          {
            id: 'id',
            name: 'id',
            experience: 0,
            lastUsed: 0,
            category: {
              id: 'id',
              name: 'name',
            },
            level: {
              id: 'id',
              name: 'name',
            },
          },
        ],
        role: { id: 'id', name: 'name' },
      },
    ];
    const result = getEmployeesSelector.projector(state);

    expect(result).toEqual(employees);
  });

  it('should return isInit', () => {
    const result = getIsInitEmployeesSelector.projector(state);

    expect(result).toEqual(state.isInitEmployees);
  });

  it('should return activate employee', () => {
    const result = getActiveEmployeeSelector.projector(state);

    expect(result).toEqual(state.activatedEmployee);
  });

  it('should return employee by id', () => {
    const id = 'active';
    const employee: GetEmployee = {
      id: 'active',
      lastName: 'name',
      firstName: 'active',
      email: 'string',
      department: 'string',
      diplomaProfession: 'string',
      institution: 'string',
      languages: [],
      skills: [
        {
          id: 'id',
          name: 'id',
          experience: 0,
          lastUsed: 0,
          category: {
            id: 'id',
            name: 'name',
          },
          level: {
            id: 'id',
            name: 'name',
          },
        },
      ],
      role: { id: 'id', name: 'name' },
    };

    const result = getEmployeeByIdSelector.projector(state, { id });

    expect(result).toEqual(employee);
  });

  it('should return employees by role id', () => {
    const id = 'id';
    const employees: GetEmployee[] = [
      {
        id: 'id',
        lastName: 'name',
        firstName: 'firstName',
        email: 'string',
        department: 'string',
        diplomaProfession: 'string',
        institution: 'string',
        languages: [
          {
            id: 'id',
            name: 'name',
            everydayReadingLevel: {
              id: 'id',
              name: 'name',
            },
            everydaySpeakingLevel: {
              id: 'id',
              name: 'name',
            },
            everydayWritingLevel: {
              id: 'id',
              name: 'name',
            },
            professionalReadingLevel: {
              id: 'id',
              name: 'name',
            },
            professionalSpeakingLevel: {
              id: 'id',
              name: 'name',
            },
            professionalWritingLevel: {
              id: 'id',
              name: 'name',
            },
          },
        ],
        skills: [],
        role: { id: 'id', name: 'name' },
      },
      {
        id: 'active',
        lastName: 'name',
        firstName: 'active',
        email: 'string',
        department: 'string',
        diplomaProfession: 'string',
        institution: 'string',
        languages: [],
        skills: [
          {
            id: 'id',
            name: 'id',
            experience: 0,
            lastUsed: 0,
            category: {
              id: 'id',
              name: 'name',
            },
            level: {
              id: 'id',
              name: 'name',
            },
          },
        ],
        role: { id: 'id', name: 'name' },
      },
    ];

    const result = getEmployeeByRoleIdSelector.projector(state, { id });
    expect(result).toEqual(employees);
  });

  describe('getEmployeesBySkillIdSelector', () => {
    it('should return employees by skill id', () => {
      const id = 'id';
      const employees: GetEmployee[] = [
        {
          id: 'active',
          lastName: 'name',
          firstName: 'active',
          email: 'string',
          department: 'string',
          diplomaProfession: 'string',
          institution: 'string',
          languages: [],
          skills: [
            {
              id: 'id',
              name: 'id',
              experience: 0,
              lastUsed: 0,
              category: {
                id: 'id',
                name: 'name',
              },
              level: {
                id: 'id',
                name: 'name',
              },
            },
          ],
          role: { id: 'id', name: 'name' },
        },
      ];

      const result = getEmployeesBySkillIdSelector.projector(state, { id });

      expect(result).toEqual(employees);
    });
  });

  describe('getEmployeesByLanguageIdSelector', () => {
    it('should return employees by language id', () => {
      const id = 'id';
      const employees: GetEmployee[] = [
        {
          id: 'id',
          lastName: 'name',
          firstName: 'firstName',
          email: 'string',
          department: 'string',
          diplomaProfession: 'string',
          institution: 'string',
          languages: [
            {
              id: 'id',
              name: 'name',
              everydayReadingLevel: {
                id: 'id',
                name: 'name',
              },
              everydaySpeakingLevel: {
                id: 'id',
                name: 'name',
              },
              everydayWritingLevel: {
                id: 'id',
                name: 'name',
              },
              professionalReadingLevel: {
                id: 'id',
                name: 'name',
              },
              professionalSpeakingLevel: {
                id: 'id',
                name: 'name',
              },
              professionalWritingLevel: {
                id: 'id',
                name: 'name',
              },
            },
          ],
          skills: [],
          role: { id: 'id', name: 'name' },
        },
      ];

      const result = getEmployeesByLanguageIdSelector.projector(state, { id });

      expect(result).toEqual(employees);
    });
  });
});
