import { vitest } from 'vitest';

import type { Interfaces } from '@entities/counter/domain';

export const mockUseViewModelApp: Interfaces.CounterReturn = {
  count: 0,
  error: '',
  onDecrementHandler: vitest.fn(),
  onIncrementHandler: vitest.fn(),
  onMount: vitest.fn(),
};
