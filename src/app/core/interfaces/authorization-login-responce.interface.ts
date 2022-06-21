export interface AuthorizationLoginResponce {
  skils: string[];
  languages: string[];
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  diplomaProfession: string;
  role: {
    name: string;
    id: string;
  };
  department: string;
  id: string;
  expiresIn: string;
  accessToken: string;
}
