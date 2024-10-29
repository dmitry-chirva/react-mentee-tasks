import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useFocus } from './challenge';
import { render, fireEvent } from '@testing-library/react';

describe('useFocus', () => {
    test('should update isFocus correctly', () => {
        const { result } = renderHook(() => useFocus<HTMLInputElement>());
        const [ref] = result.current;

        const { getByTestId } = render(<input ref={ref} data-testid="input" />);
        const inputElement = getByTestId('input');

        fireEvent.focus(inputElement);
        expect(result.current[1]).toBe(true);

        fireEvent.blur(inputElement);
        expect(result.current[1]).toBe(false);
    });
});
