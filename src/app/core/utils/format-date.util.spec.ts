import { formatDate } from './format-date.util';

describe('formatDate', () => {
  it('should return date', () => {
    const item = 'string';
    const result = formatDate(item);
    expect(result).toBe(item);
  });

  it('should return date', () => {
    const date = new Date();
    const newDate = date.toISOString();
    const result = formatDate(newDate);
    expect(result).toEqual(newDate);
  });
});
