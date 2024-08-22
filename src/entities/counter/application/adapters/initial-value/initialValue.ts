import type { Interfaces } from '../../../domain';

/**
 * Adapts the result of retrieving initial counter values to a single counter
 * object.
 *
 * @param result - The result of retrieving initial counter values.
 *
 * @returns The adapted counter object.
 */
const initialValue = (result: Interfaces.Counter[]): Interfaces.Counter =>
  result[0];

export default initialValue;
