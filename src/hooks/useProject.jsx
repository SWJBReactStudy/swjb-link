import React, { createContext, useContext, useState } from 'react';

const Context = createContext(null);

export const ProjectProvider = ({ children }) => {
  const projects = useState({
    1: [
      { title: '헬스타트', desc: '운동을 시작하는 당신에게 어울리는 프로젝트', link: 'http://test.itsw.info/6' },
      { title: '헬타트', desc: ' 당신에게 어울리는 프로젝트', link: 'http://test.itsw.info/5' },
      { title: '헬스타트', desc: '운동을 시작하는 당신에게 어울리는 프로젝트', link: 'http://test.itsw.info/6' },
      { title: '헬스타트', desc: '운동을 시작하는 당신에게 어울리는 프로젝트', link: 'http://test.itsw.info/6' },
      { title: '헬스타트', desc: '운동을 시작하는 당신에게 어울리는 프로젝트', link: 'http://test.itsw.info/6' },
    ],
    2: [],
    3: [],
  })[0];

  return <Context.Provider value={projects}>{children}</Context.Provider>;
};

const useProject = (grade) => {
  const data = useContext(Context);
  return grade ? data[grade] : data;
};

export default useProject;
