import type { Interfaces } from '../../../domain';

/**
 * Represents an implementation of the API client for the counter entity.
 */
export interface ApiClient {
  /**
   * Retrieves counter values from the API.
   *
   * @returns A Promise that resolves with an array of counter values.
   */
  get: () => Promise<Interfaces.Counter[]>;

  /**
   * Updates the counter value on the API.
   *
   * @param value - The new counter value to be updated.
   *
   * @returns A Promise that resolves with the updated counter value.
   */
  update: (value: Interfaces.Counter['value']) => Promise<number>;
}
