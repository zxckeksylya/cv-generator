export const arrayToMap = <T extends { [id: string]: any }>(
  items: T[],
  idField: string,
): {
  [id: string]: T;
} =>
  items.reduce(
    (acc, item) => {
      const id: string = item[idField] as string;
      return {
        ...acc,
        [id]: item,
      };
    },
    {} as {
      [id: string]: T;
    },
  );
