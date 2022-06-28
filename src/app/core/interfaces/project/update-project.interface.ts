export interface UpdateProject {
  id: string;
  name: string;
  secondName: string;
  startDate: string;
  endDate: string;
  teamSize: number;
  description: string;
  tasksPerformed: string;
  projectRoles: string[];
  specializations: string[];
  responsibilities: string[];
}
