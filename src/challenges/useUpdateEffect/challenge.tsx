/**
 * Implement a hook useUpdateEffect() that works like useEffect except it skips running the callback on the first render.
 *
 * @function useUpdateEffect
 * @param {EffectCallback} effect - A callback function to run after dependencies change, excluding the initial render.
 * @param {DependencyList} [deps] - An optional array of dependencies for the effect.
 * @returns {void}
 */
import React, { EffectCallback, DependencyList } from 'react';

export function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
    // your code here
}
