import React, { Ref, useState, useCallback, useRef } from 'react';

export function useFocus<T extends HTMLElement>(): [Ref<T>, boolean] {
    const [isFocus, setIsFocus] = useState(false);
    const elRef = useRef<T>();
    const controllerRef = useRef(new AbortController());

    const ref = useCallback((element: T) => {
        if (elRef.current) {
            controllerRef.current.abort();
            controllerRef.current = new AbortController();
        }

        const { signal } = controllerRef.current;
        elRef.current = element;

        elRef.current?.addEventListener('focus', () => setIsFocus(true), { signal });
        elRef.current?.addEventListener('blur', () => setIsFocus(false), { signal });
    }, []);

    return [ref, isFocus];
}
