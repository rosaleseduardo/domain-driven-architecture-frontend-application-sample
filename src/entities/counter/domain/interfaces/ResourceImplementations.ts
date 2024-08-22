import type { ImplLogic } from '../../domain';

/**
 * Represents the resource implementations for the counter application.
 */
export interface ResourceImplementations {
  /**
   * The implementation of the API client for the counter application.
   */
  ApiClientImplementation: ImplLogic.ApiClient;
}
