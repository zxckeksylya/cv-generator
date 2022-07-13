export const arrayToMap = <T>(
  idField: string,
  items: T[],
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
