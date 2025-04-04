import { beforeAll, describe, expect, expectTypeOf, test } from 'vitest';

const timeout = 30000;

describe('Request First Page of Artworks from Art Institute of Chicago', () => {
  let response: Response;
  let body: Array<{ [key: string]: unknown }>;

  beforeAll(async () => {
    response = await fetch(
      'https://api.artic.edu/api/v1/artworks?page=1&limit=100',
    );
    body = await response.json();
  }, timeout);

  test('Should have response status 200', () => {
    expect(response.status).toBe(200);
  });

  test('Should have content-type', () => {
    expect(response.headers.get('Content-Type')).toBe('application/json');
  });

  test('Should have array in the body', () => {
    expectTypeOf(body).toBeArray();
  });
});