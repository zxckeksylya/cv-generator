import { Id } from '../interfaces/id.inteface';

export const arrayToMap = <T extends Id>(
  items: T[],
): {
  [id: string]: T;
} =>
  items.reduce(
    (acc, item) => {
      const id: string = item['id'] as string;
      return {
        ...acc,
        [id]: item,
      };
    },
    {} as {
      [id: string]: T;
    },
  );
