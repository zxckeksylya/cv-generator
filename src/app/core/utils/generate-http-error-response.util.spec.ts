import { generateHttpErrorResponse } from './generate-http-error-response.util';

describe('generateHttpErrorResponse', () => {
  it('should return http error response', () => {
    const error = 'error';
    const status = 404;
    const result = generateHttpErrorResponse(error, status);
    expect(result.error).toEqual(error);
    expect(result.status).toEqual(status);
  });
});
