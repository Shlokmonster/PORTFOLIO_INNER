import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../showcase/Home';
import About from '../showcase/About';
import Window from '../os/Window';
import Experience from '../showcase/Experience';
import Projects from '../showcase/Projects';
import Contact from '../showcase/Contact';
import SoftwareProjects from '../showcase/projects/Software';
import MusicProjects from '../showcase/projects/Music';
import ArtProjects from '../showcase/projects/Art';
import VerticalNavbar from '../showcase/VerticalNavbar';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';

export interface ShowcaseExplorerProps extends WindowAppProps {}

const ShowcaseExplorer: React.FC<ShowcaseExplorerProps> = (props) => {
  const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

  return (
    <Window
      top={24}
      left={56}
      width={initWidth}
      height={initHeight}
      windowTitle='Shlok Kadam - Showcase 2025'
      windowBarIcon='windowExplorerIcon'
      closeWindow={props.onClose}
      onInteract={props.onInteract}
      minimizeWindow={props.onMinimize}
      bottomLeftText={'© Copyright 2025 Shlok Kadam'}
    >
      <div className='site-page'>
        <VerticalNavbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='experience' element={<Experience />} />
          <Route path='projects'>
            <Route index element={<Projects />} />
            <Route path='software' element={<SoftwareProjects />} />
            <Route path='music' element={<MusicProjects />} />
            <Route path='art' element={<ArtProjects />} />
          </Route>
          <Route path='contact' element={<Contact />} />
        </Routes>
      </div>
    </Window>
  );
};

export default ShowcaseExplorer;
