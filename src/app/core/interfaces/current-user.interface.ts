import { INameId } from './name-id.interface';

export interface CurrentUser {
  userId: string;
  role: INameId;
}
