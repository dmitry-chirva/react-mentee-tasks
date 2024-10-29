import { renderHook } from '@testing-library/react-hooks';
import { usePrevious } from './challenge';

describe('usePrevious', () => {
    test('should return previous value', () => {
        const { result, rerender } = renderHook(({ state }) => usePrevious(state), {
            initialProps: { state: 0 },
        });

        expect(result.current).toBeUndefined(); // Первое значение - undefined

        rerender({ state: 1 });
        expect(result.current).toBe(0); // После изменения - предыдущее значение

        rerender({ state: 2 });
        expect(result.current).toBe(1); // После изменения - предыдущее значение
    });
});
