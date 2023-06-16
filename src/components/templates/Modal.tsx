import React, { useEffect, useState } from "react";
import { ModalItem } from "../../modules/ModalContext";
import useThrottle from "../../hooks/useThrottle";
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
interface Props {
  item: ModalItem;
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ item, setOnModal }: Props) {
  const { title, url, about, skile, img } = item;
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [animate, setAnimate] = useState(false);
  const itemsList = [img.at(-1), ...img, img.at(0)] as string[];

  console.log(activeIndex);
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animate]);
  useEffect(() => {
    if (activeIndex === itemsList.length - 1) {
      const timer = setTimeout(() => {
        setActiveIndex(1);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (activeIndex === 0) {
      const timer = setTimeout(() => {
        setActiveIndex(itemsList.length - 2);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const onClickModal = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const onClickBackdrop = () => {
    setOnModal(false);
  };

  const handlePrevSlide = useThrottle({
    fn: () => {
      setAnimate(true);
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? itemsList.length - 1 : prevIndex - 1
      );
    },
    delay: 500,
  });

  const handleNextSlide = useThrottle({
    fn: () => {
      setAnimate(true);
      setActiveIndex((prevIndex) =>
        prevIndex === itemsList.length - 1 ? 1 : prevIndex + 1
      );
    },
    delay: 500,
  });

  console.log(img);
  return (
    <div
      onClick={onClickBackdrop}
      className="fixed top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center cursor-pointer "
    >
      <div
        className="h-full max-w-[1020px] overflow-y-scroll text-[#8a8a8a] z-20 p-10 bg-[#2a2a2a] cursor-default animate-up"
        onClick={onClickModal}
      >
        <div className="mx-auto w-fit ">
          <h1 className="text-4xl font-bold text-[#cacaca] ">{title}</h1>
          <div className="flex gap-4 my-4 ">
            <button className="p-2 bg-[#313131] rounded shadow-inner cursor-pointer  ">
              <a href={url} target="_blank">
                Demo Page
              </a>
            </button>
            <button className="p-2 bg-[#313131] rounded shadow-inner cursor-pointer  ">
              <a>
                <BsGithub />
              </a>
            </button>
          </div>
          <div className="relative overflow-hidden w-full h-full max-h-[500px]  ">
            <div
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                transition: `transform ${animate ? 300 : 0}ms ease-in-out 0s`,
              }}
              className={` flex w-full  translate-x-[-${activeIndex * 100}%] `}
            >
              {itemsList.map((img, index) => (
                // <div
                //   key={index}
                //   className="w-full h-full"
                //   style={{
                //     backgroundImage: `url(${process.env.PUBLIC_URL + img})`,
                //     backgroundSize: "cover",
                //     backgroundPosition: "center",
                //     backgroundRepeat: "no-repeat",
                //   }}
                // />

                <img
                  className="w-full h-auto "
                  src={img}
                  alt="프로젝트 이미지"
                />
              ))}
            </div>
            <>
              <button
                type="button"
                className={`px-4 py-2 left-0 absolute h-full top-0  opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-l-md focus:outline-none transition-opacity duration-200}`}
                onClick={handlePrevSlide}
              >
                <BiLeftArrow className="text-white" />
              </button>
              <button
                type="button"
                className={`px-4 py-2 right-0 absolute h-full top-0  opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-r-md focus:outline-none transition-opacity duration-200 
              }`}
                onClick={handleNextSlide}
              >
                <BiRightArrow className="text-white" />
              </button>

              <div className="absolute bottom-[0px]  right-[50%] flex translate-x-[50%] translate-y-[-50%] gap-3 ">
                {img.map((item, index: number) => (
                  <div
                    key={item + index}
                    onClick={() => {
                      setActiveIndex(index + 1);
                      setAnimate(true);
                    }}
                    className={`w-[15px] h-[15px] border  border-solid  cursor-pointer  rounded-full border-black  ${
                      animate
                        ? "duration-200 transition-colors delay-300"
                        : "duration-0 delay-0"
                    }   ${
                      index === activeIndex - 1 ? "bg-black " : "bg-white "
                    }`}
                  />
                ))}
              </div>
            </>
          </div>
          <div>
            <h1 className="text-[#cacaca]  my-2 font-semibold text-xl">
              주요기능
            </h1>
            <hr className="w-[50%] my-5" />
            {about}
          </div>
          <div>
            <h1 className="text-[#cacaca] my-2  font-semibold text-xl">
              사용기술
            </h1>
            <hr className="w-[50%] my-5" />
            <ul>
              {skile.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
