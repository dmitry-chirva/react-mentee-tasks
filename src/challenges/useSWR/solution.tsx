import { useState, useEffect, useMemo } from 'react';

export function useSWR<T = any, E = any>(
    _key: string,
    fetcher: () => T | Promise<T>
): {
    data?: T;
    error?: E;
} {
    const [data, setData] = useState<T>();
    const fetchResult = useMemo(() => fetcher(), [_key]);
    const [error, setError] = useState<E>();

    useEffect(() => {
        if (fetchResult instanceof Promise) {
            fetchResult.then(setData, setError);
        }
    }, [fetchResult]);

    return {
        data: fetchResult instanceof Promise ? data : fetchResult,
        error,
    };
}
