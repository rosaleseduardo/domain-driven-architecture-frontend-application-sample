import type { Interfaces } from '../../../../domain';

/**
 * Checks if the given counter value is non-negative.
 *
 * @param count - The counter value to check.
 *
 * @returns A boolean indicating whether the counter value is non-negative.
 */
const nonNegativeValue = (count: Interfaces.Counter['value']): boolean => {
  return count >= 0;
};

export default nonNegativeValue;
