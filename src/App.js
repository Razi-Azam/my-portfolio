import React from 'react';
import './App.css';

import Profile from './Components/Home/Profile';
import Navigation from './Components/Navigation/Navigation';
import AboutMe from './Components/AboutMe/AboutMe';
import MySkill from './Components/MySkills/MySkill';
import Achievement from './Components/Achievements/Achievement';
import Project from './Components/Projects/Project';
// import Testimonial from './Components/Testimonial/Testimonial';
// import ContactMe from './Components/ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
      <Profile />
      <Navigation />
      <AboutMe />
      <MySkill />
      <Achievement />
      <Project />
    </div>
  );
}

export default App;
