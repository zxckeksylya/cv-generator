import { INameId } from '../interfaces/name-id.interface';
export const getArrayIdOutINameId = (array: INameId[] | INameId): string[] =>
  Array.isArray(array)
    ? array.reduce(
        (previousValue, currentValue) => previousValue.concat(currentValue.id),
        [] as string[],
      )
    : [array.id];
