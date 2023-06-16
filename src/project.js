import MB01 from "./assets/img/MB01.png";
import MB02 from "./assets/img/MB02.png";
import MB03 from "./assets/img/MB03.png";
import Shopping01 from "./assets/img/Shopping01.png";
import Shopping02 from "./assets/img/Shopping02.png";
import Shopping03 from "./assets/img/Shopping03.png";
import Shopping04 from "./assets/img/Shopping04.png";
import todo01 from "./assets/img/todo01.png";
import todo02 from "./assets/img/todo02.png";
import Youtube01 from "./assets/img/Youtube01.png";
import Youtube02 from "./assets/img/Youtube02.png";
import Youtube03 from "./assets/img/Youtube03.png";

export const project = [
  {
    title: "Todo",
    skile: ["Mui", "Uuid"],
    url: "https://silo9506.github.io/mui_todo/",
    img: [todo01, todo02],
    git: "https://github.com/silo9506/mui_todo",
    about: (
      <div>
        로컬스토리지를 사용하여 리스트 추가 수정 삭제를 Mui를 통해 다크모드
        기능을 구현하였습니다.
      </div>
    ),
  },
  {
    title: "movieAndBook",
    skile: ["Mui", "redux", "Axios"],
    url: "https://silo9506.github.io/movieAndBook/",
    img: [MB01, MB02, MB03],
    git: "https://github.com/silo9506/movieAndBook",
    about: (
      <div>
        도서검색에는 Intersection Observer를통한 무한스크롤을 구현하였습니다.
        무비검색에는 일반적인 페이지네이션을만들었습니다.
      </div>
    ),
  },
  {
    title: "Youtube",
    skile: ["TailwindCss", "TanStackQuery", "Axios"],
    url: "https://silo9506.github.io/dreamcoding/",
    img: [Youtube01, Youtube02, Youtube03],
    git: "https://github.com/silo9506/dreamcoding",
    about: (
      <div>
        TanStackQuery를 통해 검색결과를 저장하여 api호출 횟수를 줄였습니다.
        검색페이지는 무한스크롤로 구현하였습니다.
      </div>
    ),
  },
  {
    title: "Shopping mall",
    skile: ["TailwindCss", "Axios", "Firestore", "Cloudinary"],
    url: "https://silo9506.github.io/dream-shopping/",
    img: [Shopping01, Shopping02, Shopping03, Shopping04],
    git: "https://github.com/silo9506/dream-shopping",
    about: (
      <div>
        파이어스토어의 리얼타임데이터베이스와 Authentication을 사용하여 회원가입
        및 제품 등록권한을 부여하였습니다. 이미지 업로드를 위해 Cloudinary를
        사용하였습니다.
      </div>
    ),
  },
];
