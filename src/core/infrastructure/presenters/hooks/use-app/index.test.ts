import type { Interfaces } from '@entities/counter/domain';
import { renderHook } from '@testing-library/react';

import { mockUseViewModelApp } from './mock';

describe('useApp - Custom Hook', () => {
  it('onIncrementHandler should return what is expected', () => {
    const { result } = renderHook(
      (): Interfaces.CounterReturn => mockUseViewModelApp,
    );

    const response = result.current.onIncrementHandler();

    expect(response).toBe(undefined);
  });

  it('onDecrementHandler should return what is expected', () => {
    const { result } = renderHook(
      (): Interfaces.CounterReturn => mockUseViewModelApp,
    );

    const response = result.current.onDecrementHandler();

    expect(response).toBe(undefined);
  });

  it('onMount should return what is expected', () => {
    const { result } = renderHook(
      (): Interfaces.CounterReturn => mockUseViewModelApp,
    );

    const response = result.current.onMount();

    expect(response).toBe(undefined);
  });
});
