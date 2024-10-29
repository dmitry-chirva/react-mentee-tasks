import { EffectCallback } from 'react';
import { renderHook } from '@testing-library/react';
import { useEffectOnce } from './challenge';

describe('useEffectOnce', () => {
    test('should run effect only once', () => {
        const effect: EffectCallback = jest.fn();
        const { rerender } = renderHook(() => useEffectOnce(effect));

        expect(effect).toHaveBeenCalledTimes(1);

        rerender();
        expect(effect).toHaveBeenCalledTimes(1);
    });

    test('should call cleanup function if it exists', () => {
        const cleanup = jest.fn();
        const effect: EffectCallback = jest.fn(() => cleanup);
        const { unmount } = renderHook(() => useEffectOnce(effect));

        expect(effect).toHaveBeenCalledTimes(1);

        unmount();
        expect(cleanup).toHaveBeenCalledTimes(1);
    });
});
