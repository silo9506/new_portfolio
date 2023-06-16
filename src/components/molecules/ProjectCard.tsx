import React, { useState, useEffect, ReactNode } from "react";
import SkillBox from "../atoms/SkillBox";
import { useModalContext } from "../../modules/ModalContext";

interface props {
  item: {
    title: string;
    skile: string[];
    url: string;
    about: JSX.Element;
    img: string[];
    git: string;
  };
}

export default function ProjectCard({ item }: props) {
  const [hover, setHover] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const { setOnModal, setItem } = useModalContext();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (hover) {
      timeoutId = setTimeout(() => {
        setShowSkills(true);
      }, 500);
    } else {
      setShowSkills(false);
    }
    return () => clearTimeout(timeoutId);
  }, [hover]);

  const onClickItem = () => {
    setOnModal(true);
    setItem({
      title: item.title,
      skile: item.skile,
      url: item.url,
      about: item.about,
      img: item.img,
      git: item.git,
    });
  };

  console.log(item);

  return (
    <div
      className="relative h-full "
      onClick={onClickItem}
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      onTouchStart={() => setHover(true)}
      onTouchEnd={() => setHover(false)}
    >
      <div className="absolute top-0 left-0 right-0 z-10 w-full text-center text-white bg-gray-500">
        {item.title}
      </div>
      <img className="w-full h-[500px] " src={item.img[0]} />
      <div
        className={`${
          hover ? "bottom-0" : " bottom-[100%]"
        }  absolute top-0 left-0 right-0  transition-all opacity-60 duration-500 ease-in-out bg-black back_drop  `}
      />
      <div
        className={`absolute   top-0 bottom-0 left-0 right-0 flex items-center justify-center ${
          showSkills ? "animation-[fadein]  duration-700" : "opacity-0"
        }`}
      >
        {item.skile.map((skile) => {
          return <SkillBox>{skile}</SkillBox>;
        })}
      </div>
    </div>
  );
}
