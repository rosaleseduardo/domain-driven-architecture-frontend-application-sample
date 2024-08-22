import type { Interfaces as CoreInterfaces } from '@core/domain';

import { UseCases } from '../../../application';
import type { Interfaces as CounterInterfaces } from '../../../domain';
import { Implementations } from '../../../infrastructure';

/**
 * Custom function that provides the view model functions for the counter entity
 *
 * @returns The counter view model functions.
 */
const viewModel = (): CounterInterfaces.ViewModel => {
  /**
   * Loads the initial counter value.
   *
   * @returns A Promise that resolves with the result of the initial value
   * retrieval.
   */
  const loadInitialState = async (): Promise<
    CoreInterfaces.UseCaseReturn<CounterInterfaces.Counter>
  > =>
    await UseCases.getInitialValue({
      ApiClientImplementation: Implementations.apiClients.rest(),
    });

  /**
   * Increments the counter value.

   * 
   *
   * @param count - The current counter value.
   *
   * @returns A Promise that resolves with the result of the increment
   * operation.
   */
  const incrementValue = async (
    count: CounterInterfaces.Counter['value'],
  ): Promise<CoreInterfaces.UseCaseReturn<number>> =>
    await UseCases.incrementValue(count, {
      ApiClientImplementation: Implementations.apiClients.rest(),
    });

  /**
   * Decrements the counter value.
   *
   * @param count - The current counter value.
   *
   * @returns A Promise that resolves with the result of the decrement
   * operation.
   */
  const decrementValue = async (
    count: CounterInterfaces.Counter['value'],
  ): Promise<CoreInterfaces.UseCaseReturn<number>> =>
    await UseCases.decrementValue(count, {
      ApiClientImplementation: Implementations.apiClients.rest(),
    });

  return {
    loadInitialState,
    incrementValue,
    decrementValue,
  };
};

export default viewModel;
