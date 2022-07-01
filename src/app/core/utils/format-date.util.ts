export const formatDate = (date: Date | string): string =>
  typeof date === 'string' ? date : date.toISOString();
