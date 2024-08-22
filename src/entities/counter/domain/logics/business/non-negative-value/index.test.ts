import { describe, expect, it } from 'vitest';

import { nonNegativeValue } from '.';

describe('Business Logic - Non Negative Value', () => {
  it('6 being passed, it should return "true"', () => {
    expect(nonNegativeValue(6)).toBeTruthy();
  });
  it('-1 being passed, it should return "false', () => {
    expect(nonNegativeValue(-1)).toBeFalsy();
  });
});
