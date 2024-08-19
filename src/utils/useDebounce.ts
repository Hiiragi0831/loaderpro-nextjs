import { useCallback } from "react";
import { AnyFn } from "@/common/types/AnyFn";
import { debounce } from "lodash-es";

export function useDebounce(callback: AnyFn, delay: number): AnyFn {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(debounce(callback, delay), [delay, callback]);
}
