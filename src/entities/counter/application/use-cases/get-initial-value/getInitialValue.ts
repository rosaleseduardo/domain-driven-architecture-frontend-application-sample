import type { Interfaces as CoreInterfaces } from '@core/domain';

import { Adapters } from '../../../application';
import type { Interfaces as CounterInterfaces } from '../../../domain';

/**
 * Retrieves the initial counter value.
 *
 * @param resourceImplementations - The resource implementations required for
 * the operation.
 *
 * @returns A Promise that resolves with the result of the initial value
 * retrieval.
 */
const getInitialValue = async ({
  ApiClientImplementation,
}: CounterInterfaces.ResourceImplementations): Promise<
  CoreInterfaces.UseCaseReturn<CounterInterfaces.Counter>
> => {
  try {
    const result = await ApiClientImplementation.get();

    const adaptedResult = Adapters.initialValue(result);

    return {
      fulfilled: true,
      output: adaptedResult,
      error: '',
    };
  } catch (error) {
    return {
      fulfilled: false,
      output: { id: 0, value: 0 },
      error: `There was an error when getting the initial value. Details: ${
        error as string
      }`,
    };
  }
};

export default getInitialValue;
