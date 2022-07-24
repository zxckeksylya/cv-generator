import { INameId } from '../interfaces/name-id.interface';

export const getArrayIdOutINameId = (array: INameId[] | INameId): string[] =>
  Array.isArray(array) ? array.map((item) => item.id) : [array.id];
