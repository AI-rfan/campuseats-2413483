import { useEffect, useState } from "react";
// Step 1: a custom hook. Same shape as useState, but the value survives a page refresh.
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    
    try {
      return JSON.parse(saved);
    } catch (error) {
      console.warn(`Could not parse localStorage value for "${key}".`, error);
      return initialValue;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Could not save localStorage value for "${key}".`, error);
    }
  }, [key, value]);
  return [value, setValue];
}
