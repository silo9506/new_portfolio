import { useEffect, useRef, useState } from "react";

const Header = () => {
  const savedCallback = useRef<() => void>();
  const [top1, setTop1] = useState<number>(0);
  const [top2, setTop2] = useState<number>(0);
  const [btm1, setBtm1] = useState<number>(0);
  const [btm2, setBtm2] = useState<number>(0);
  const [skew, setSkew] = useState<number>(0);

  const callback = () => {
    setTop1(Math.random() * 200);
    setTop2(Math.random() * 200);
    setBtm1(Math.random() * 200);
    setBtm2(Math.random() * 200);
    setSkew(Math.random() * 10);
  };

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };
    const timer = setInterval(tick, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hedaer flex items-center justify-center w-full h-full bg-[#1a1a1a] select-none">
      <div className="container mx-auto">
        <h1
          className={`skew-x-[${skew}]  relative text-4xl text-center text-white uppercase sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl`}
        >
          Hyeon Chul's Portfolio
          <span
            className="absolute top-0 left-0 w-full h-full bg-transparent "
            style={{
              clipPath: `polygon(0 ${top1}%,100% ${top1}%,100% ${btm1}%,0 ${btm1}%)`,
              textShadow: "2px -2px #2a96d4",
            }}
          >
            Hyeon Chul's Portfolio
          </span>
          <span
            className="absolute top-0 left-0 w-full h-full bg-transparent "
            style={{
              clipPath: `polygon(0 ${top2}%,100% ${top2}%,100% ${btm2}%,0 ${btm2}%)`,
              textShadow: "-2px 2px #cc2a1f",
            }}
          >
            Hyeon Chul's Portfolio
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
