import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Router from './Router';
import { ProjectProvider } from './hooks/useProject';

ReactDOM.render(
  <React.StrictMode>
    <ProjectProvider>
      <Router />
    </ProjectProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
