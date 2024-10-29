import React, { EffectCallback, DependencyList, useRef, useEffect } from 'react';

export function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
    const hasFirstRun = useRef(true);

    useEffect(() => {
        if (!hasFirstRun.current) {
            return effect();
        } else {
            hasFirstRun.current = false;
        }
    }, deps);
}
