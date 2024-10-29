import { renderHook } from '@testing-library/react-hooks';
import { useSWR } from './challenge';

describe('useSWR', () => {
    test('should return data correctly', async () => {
        const fetcher = jest.fn().mockResolvedValue({ name: 'Dmytro' });

        const { result, waitForNextUpdate } = renderHook(() =>
            useSWR('/api', fetcher)
        );

        expect(result.current.data).toBeUndefined();
        expect(result.current.error).toBeUndefined();

        await waitForNextUpdate();

        expect(result.current.data).toEqual({ name: 'Dmytro' });
        expect(result.current.error).toBeUndefined();
    });
});
