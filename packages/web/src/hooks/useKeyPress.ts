import { useEffect } from "react";

const useKeyPress = (targetKey, fn) => {
  function downHandler({ key }) {
    if (key === targetKey) {
      fn();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []);
};

export default useKeyPress;
