import type { Interfaces as CoreInterfaces } from '@core/domain';

import type { Interfaces as CounterInterfaces } from '../../../domain';

/**
 * Increments the counter value.
 *
 * @param count - The current counter value.
 *
 * @param resourceImplementations - The resource implementations required for
 * the operation.
 *
 * @returns A Promise that resolves with the result of the increment operation.
 */
const incrementValue = async (
  count: number,
  { ApiClientImplementation }: CounterInterfaces.ResourceImplementations,
): Promise<CoreInterfaces.UseCaseReturn<number>> => {
  try {
    const newValue = count + 1;

    const response = await ApiClientImplementation.update(newValue);

    return {
      fulfilled: Boolean(response),
      output: newValue,
      error: '',
    };
  } catch (error) {
    return {
      fulfilled: false,
      output: 0,
      error: `There was an error when incrementing the value. Details: ${
        error as string
      }`,
    };
  }
};

export default incrementValue;
