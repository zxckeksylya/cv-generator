import { RoleResponse } from './role-response.interface';

export interface AuthorizationLoginResponse {
  skils: string[];
  languages: string[];
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  diplomaProfession: string;
  role: RoleResponse;
  department: string;
  id: string;
  expiresIn: string;
  accessToken: string;
}
