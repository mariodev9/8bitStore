import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const UseDebounce = (val, delay) => {
  const [debounceVal, setDebounceVal] = useState(val);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(val);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [val]);

  return debounceVal;
};
