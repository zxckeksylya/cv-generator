export const deleteInMap = <T extends { [id: string]: any }>(map: T, id: string): T =>
  Object.values(map).reduce((acc, key) => {
    if (key.id !== id) {
      acc[key.id] = map[key.id];
    }
    return acc;
  }, {} as T);
