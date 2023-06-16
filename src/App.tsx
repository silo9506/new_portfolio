import React, { useEffect, useState } from "react";
import Header from "./pages/Header";
import Project from "./pages/Project";
import { BsGithub } from "react-icons/bs";
import { ModalItem, useModalContext } from "./modules/ModalContext";
import Modal from "./components/templates/Modal";

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(1000); // 초기값 설정
  const { onModal, setOnModal, item, setItem } = useModalContext();

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setScrollY(scroll);

      const footer = document.querySelector("footer");
      if (footer && scroll >= footerHeight) {
        footer.style.bottom = "0px";
      } else if (footer) {
        footer.style.bottom = `-${footerHeight}px`;
      }
    };

    const windowHeight = window.innerHeight;
    const footer = document.querySelector("footer");
    const heightDocument =
      windowHeight + (contentHeight || 0) + (footer?.clientHeight || 0) - 20;

    if (footer) {
      setFooterHeight(footer.clientHeight);
    }

    const scrollAnimate = document.getElementById("scroll-animate");
    const scrollAnimateMain = document.getElementById("scroll-animate-main");
    const header = document.querySelector("header");
    const wrapperParallax = document.querySelector(".wrapper-parallax");

    if (scrollAnimate && scrollAnimateMain && header && wrapperParallax) {
      (scrollAnimate as HTMLElement).style.height = `${heightDocument}px`;
      (scrollAnimateMain as HTMLElement).style.height = `${heightDocument}px`;
      (header as HTMLElement).style.height = `${windowHeight}px`;
      (header as HTMLElement).style.lineHeight = `${windowHeight}px`;
      (wrapperParallax as HTMLElement).style.marginTop = `${windowHeight}px`;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [footerHeight, contentHeight]);

  const handleContentResize = () => {
    const content = document.querySelector(".project");
    if (content) {
      setContentHeight(content.clientHeight);
    }
  };

  useEffect(() => {
    handleContentResize();
    window.addEventListener("resize", handleContentResize);

    return () => {
      window.removeEventListener("resize", handleContentResize);
    };
  }, []);

  return (
    <div id="scroll-animate">
      {onModal && (
        <Modal setOnModal={setOnModal} item={item as ModalItem as ModalItem} />
      )}
      <div id="scroll-animate-main" style={{ top: `-${scrollY}px` }}>
        <div className="wrapper-parallax">
          <header>
            <Header />
          </header>
          <section className=" project">
            <Project />
          </section>
          <footer
            className="min-h-[500px] flex-col flex items-center justify-center text-[#cacaca] sm:text-lg"
            style={{
              bottom: `-${footerHeight}px`,
              position: "absolute",
              zIndex: 1,
            }}
          >
            <div className="container flex flex-col items-center justify-center flex-1 gap-10 sm:flex-row">
              <div className="flex flex-col">
                <div className="my-1 text-2xl font-bold text-white sm:text-3xl">
                  Profile
                </div>
                <table>
                  <tbody>
                    <tr className="flex gap-2">
                      <td>이름</td>
                      <td>김현철</td>
                    </tr>
                    <tr className="flex gap-2">
                      <td>생년월일</td>
                      <td>1995.04.23</td>
                    </tr>
                    <tr className="flex gap-2">
                      <td>거주지</td>
                      <td>서울 강북구 수유동</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col">
                <div className="my-1 text-2xl font-bold text-white sm:text-3xl">
                  Contact
                </div>
                <table>
                  <tbody>
                    <tr className="flex gap-2">
                      <td>Tel</td>
                      <td>010 9506 2826</td>
                    </tr>
                    <tr className="flex gap-2">
                      <td>Email</td>
                      <td>silo9506@gmail.com</td>
                    </tr>
                    <tr className="flex gap-2">
                      <td>
                        <a target="_blank" href="https://github.com/silo9506">
                          <BsGithub />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
