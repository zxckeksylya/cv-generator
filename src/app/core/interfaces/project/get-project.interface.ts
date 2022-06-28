import { Specialization } from '../specialization.interface';
import { ProjectRole } from '../project-role.interface';
import { ResponsibilityItem } from '../responsibility-item.interface';

export interface GetProject {
  name: string;
  secondName: string;
  startDate: string;
  endDate: string;
  teamSize: number;
  taskPerformed: string;
  description: string;
  id: string;
  specializations: Specialization[];
  projectRoles: ProjectRole[];
  responsibilities: ResponsibilityItem[];
}
