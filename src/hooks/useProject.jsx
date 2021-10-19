import React, { createContext, useContext, useState } from 'react';
import { One, Molto, Starterdy, Swjb, Health, Indian, Sinamon } from '../asset/projectImage';

const Context = createContext(null);

export const ProjectProvider = ({ children }) => {
  const sinamon = {
    title: '수정과',
    creater: '팀 수정과',
    desc: '복잡한 아날로그 학교를 시원하고 간편하게, 🥤수정과',
    github: 'https://github.com/swjb-sinamon',
    link: 'https://snm.itsw.info/',
    img: Sinamon,
  };

  const projects = useState({
    1: [sinamon],
    2: [sinamon],
    3: [
      sinamon,
      {
        title: '모두를 위한 음악 사전',
        creater: '몰토',
        desc: '간편하게 음악을 이해하고 더욱 더 즐길 수 있도록 하여, 음악을 ‘듣는 것’에서 더 나아가 ‘보는 것’을 실현하고자 개발한 사이트',
        link: 'http://test.itsw.info/4',
        img: Molto,
      },
      {
        title: '스타터디',
        creater: '달팽이관',
        desc: '코로나로 인해 예전보다 많아진 비대면 활동에서 기존의 앱 형태의 플랫폼의 불편함을 해소하기 위해 개발한 사이트',
        link: 'http://test.itsw.info/5',
        img: Starterdy,
      },
      {
        title: 'NEW수정고사이트',
        creater: '인도는 넷이야',
        desc: '복잡하고 불필요한 내용이 많던 기존 홈페이지에서 우리학교 학생들과 신입생들에게 꼭 필요한 정보만을 모아 재구성한 사이트',
        link: 'http://test.itsw.info/3',
        img: Swjb,
      },
      {
        title: '인디안',
        creater: '!(느낌표)',
        desc: '작은 게임 개발업체에서 만든 것, 더러는 개인 개발자가 만든 게임이지만 개발자의 창의력이 돋보이는 독특한 게임, 그렇지만 아는 사람들만 아는 게임, 그러한 인디게임을 홍보하기 위한 사이트',
        link: 'http://test.itsw.info/2',
        img: Indian,
      },
      { title: '성철', creater: '성철', desc: '성철철철철성철철철철', link: 'http://test.itsw.info/1', img: One },
      { title: '헬스타트', creater: 'Proteen', desc: '운동을 시작하는 당신에게 어울리는 프로젝트', link: 'http://test.itsw.info/6', img: Health },
    ],
  })[0];

  return <Context.Provider value={projects}>{children}</Context.Provider>;
};

const useProject = (grade) => {
  const data = useContext(Context);
  return grade ? data[grade] : data;
};

export default useProject;
