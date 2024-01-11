import { useEffect, useRef, EffectCallback, DependencyList } from 'react';


/**
 * Custom hook that mimics `useEffect` but does not run on the initial component mount.
 * It only runs when the specified dependencies change after the component is mounted.
 *
 * @param effect - The effect function to run on dependency updates.
 * @param dependencies - Array of dependencies which triggers the effect when they change.
 */
function useAfterMount(effect: EffectCallback, dependencies?: DependencyList) {
      const isInitialMount = useRef(true);

      useEffect(() => {
            if (isInitialMount.current) {
                  isInitialMount.current = false;
            } else {
                  return effect();
            }
      }, dependencies);
}

export default useAfterMount;