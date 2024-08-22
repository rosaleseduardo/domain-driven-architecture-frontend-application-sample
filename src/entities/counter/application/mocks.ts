import { vitest } from 'vitest';

import type { ImplLogic, Interfaces } from '../domain';

/**
 * Mock implementation of the API client for testing purposes.
 *
 * @returns A mock implementation of the API client.
 */
export const mockApiClientImplementation = (): ImplLogic.ApiClient => ({
  /**
   * Mock implementation of the API client's get method.
   *
   * @returns A Promise that resolves with an array of counter objects.
   */
  get: vitest.fn(
    async () =>
      await Promise.resolve([
        {
          id: 1,
          value: 10,
        },
      ]),
  ),

  /**
   * Mock implementation of the API client's update method.
   *
   * @param value - The new value to be updated.
   *
   * @returns A Promise that resolves with the updated value if it is greater
   * than 0, otherwise resolves with 0.
   */
  update: vitest.fn(
    async (value: Interfaces.Counter['value']): Promise<number> =>
      value > 0 ? await Promise.resolve(value) : await Promise.resolve(0),
  ),
});
