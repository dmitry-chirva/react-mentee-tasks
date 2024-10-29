import { renderHook } from '@testing-library/react-hooks';
import { useUpdateEffect } from './challenge';

describe('useUpdateEffect', () => {
    test('should skip running effect on first render', () => {
        const effect = jest.fn();
        const { rerender } = renderHook(({ dep }) => useUpdateEffect(effect, [dep]), {
            initialProps: { dep: 0 },
        });

        expect(effect).not.toHaveBeenCalled(); // Проверяем, что эффект не был вызван на первой отрисовке

        rerender({ dep: 1 });
        expect(effect).toHaveBeenCalledTimes(1); // Теперь проверяем вызов эффекта при изменении зависимости
    });
});
