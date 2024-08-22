import type { Interfaces } from '@entities/counter/domain';
import {
  renderHook,
  type RenderHookResult,
} from '@testing-library/react-hooks';

import { mockUseViewModelApp } from './mock';

const performRender = (): RenderHookResult<void, Interfaces.CounterReturn> =>
  renderHook(() => mockUseViewModelApp);

describe('useApp - Custom Hook', () => {
  it('onIncrementHandler should return what is expected', async () => {
    const {
      result: { current },
    } = performRender();

    const response = current.onIncrementHandler();

    expect(response).toBe(undefined);
  });

  it('onDecrementHandler should return what is expected', async () => {
    const {
      result: { current },
    } = performRender();

    const response = current.onDecrementHandler();

    expect(response).toBe(undefined);
  });

  it('onMount should return what is expected', async () => {
    const {
      result: { current },
    } = performRender();

    const response = current.onMount();

    expect(response).toBe(undefined);
  });
});
