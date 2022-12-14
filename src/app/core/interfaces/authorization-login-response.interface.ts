import { INameId } from './name-id.interface';

export interface AuthorizationLoginResponse {
  skills: string[];
  languages: string[];
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  diplomaProfession: string;
  role: INameId;
  department: string;
  id: string;
  expiresIn: string;
  accessToken: string;
}
