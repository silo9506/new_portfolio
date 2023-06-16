import { useState } from "react";

interface Props {
  fn: Function;
  delay: number;
}
const useThrottle = ({ fn, delay }: Props) => {
  const [throttle, setThrottle] = useState(false);

  const throttledFn = (any: any) => {
    if (!throttle) {
      fn(any);
      setThrottle(true);
      setTimeout(() => {
        setThrottle(false);
      }, delay);
    }
  };

  return throttledFn;
};

export default useThrottle;
