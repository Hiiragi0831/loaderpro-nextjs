import { debounce } from "lodash-es/lodash";
import { useCallback } from "preact/hooks";

import { AnyFn } from "../common/types/AnyFn";

export function useDebounce(callback: AnyFn, delay: number): AnyFn {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(debounce(callback, delay), [delay, callback]);
}
