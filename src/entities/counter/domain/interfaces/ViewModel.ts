import type { Interfaces as CoreInterfaces } from '@core/domain';

import type { Interfaces as CounterInterfaces } from '../../domain';

/**
 * Represents the view model for the counter application.
 */
export interface ViewModel {
  /**
   * Loads the initial counter state.
   *
   * @returns A Promise that resolves with the result of the initial state
   * retrieval.
   */
  loadInitialState: () => Promise<
    CoreInterfaces.UseCaseReturn<CounterInterfaces.Counter>
  >;

  /**
   * Increments the counter value.
   *
   * @param count - The current counter value.
   *
   * @returns A Promise that resolves with the result of the increment
   * operation.
   */
  incrementValue: (
    count: CounterInterfaces.Counter['value'],
  ) => Promise<CoreInterfaces.UseCaseReturn<number>>;

  /**
   * Decrements the counter value.
   *
   * @param count - The current counter value.
   *
   * @returns A Promise that resolves with the result of the decrement
   * operation.
   */
  decrementValue: (
    count: CounterInterfaces.Counter['value'],
  ) => Promise<CoreInterfaces.UseCaseReturn<number>>;
}
