import { useEffect, useRef, useState } from "react";
import useThrottle from "../../hooks/useThrottle";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./ParallaxPage.css";
interface SectionProps {
  sections: { background: string; content: JSX.Element }[];
}

const ParallaxPage: React.FC<SectionProps> = ({ sections }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [curPage, setCurPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    setMaxPage(sections.length);
  }, [sections]);

  useEffect(() => {
    init();
  }, [curPage]);

  const init = () => {
    if (curPage !== 0 && curPage !== maxPage - 1) {
      let num = 1;
      while (num <= curPage) {
        sectionRef.current?.children[curPage - num].classList.add("invisible");
        sectionRef.current?.children[curPage].classList.remove("invisible");
        num++;
      }
    }
    if (curPage === 0) {
      let num = 0;
      while (num < maxPage) {
        sectionRef.current?.children[curPage + num].classList.remove(
          "invisible"
        );
        num++;
      }
    }

    if (curPage === maxPage - 1) {
      let num = 1;
      while (num < maxPage) {
        sectionRef.current?.children[curPage - num].classList.add("invisible");
        num++;
      }
    }
  };

  const prev = useThrottle({
    fn: () => {
      if (curPage !== 0) {
        const newCurPage = curPage - 1;
        setCurPage(newCurPage);
        sectionRef.current?.children[newCurPage].classList.remove("invisible");
      }
    },
    delay: 1000,
  });
  const next = useThrottle({
    fn: () => {
      if (curPage < maxPage - 1) {
        const newCurPage = curPage + 1;
        setCurPage(newCurPage);
        sectionRef.current?.children[newCurPage - 1].classList.add("invisible");
      }
    },
    delay: 1000,
  });

  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center px-10 justify-between z-[99]">
        <button onClick={prev}>
          <MdOutlineArrowBackIos />
        </button>
        <button onClick={next}>
          <MdOutlineArrowForwardIos />
        </button>
      </div>

      <div ref={sectionRef}>
        {sections.map((section, index) => (
          <div
            key={`section-${index}`}
            className={`background  ${section.background}`}
          >
            {section.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default ParallaxPage;
