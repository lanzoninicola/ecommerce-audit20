import * as React from "react";
import ExpiredStorage from "expired-storage";
import { isDomAvailable, isUndefined } from "@utils";

export const useLocalStorage = (key, initialValue, ss) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    if (isDomAvailable) {
      try {
        const expiredStorage = new ExpiredStorage();
        const item = expiredStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (err) {
        console.error(err);
        return initialValue;
      }
    }
  });

  const setValue = (value) => {
    if (isDomAvailable) {
      try {
        const expiredStorage = new ExpiredStorage();
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);

        isUndefined(ss)
          ? window.localStorage.setItem(key, JSON.stringify(valueToStore))
          : expiredStorage.setItem(key, JSON.stringify(valueToStore), 30);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
