import { EmployeeMap, GetEmployee } from '../../interfaces/employee.interface';

export const arrayEmployeesToMap = (projects: GetEmployee[]): EmployeeMap =>
  projects.reduce((pv, cv) => {
    pv[cv.id] = cv;
    return pv;
  }, {} as EmployeeMap);
