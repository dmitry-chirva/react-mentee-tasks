import { useRef, useEffect } from 'react';

export function usePrevious<T>(value: T): T | undefined {
    const prevRef = useRef<T>();

    useEffect(() => {
        prevRef.current = value;
    }, [value]);

    return prevRef.current;
}
