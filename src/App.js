import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter, Route, Switch, useLocation} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faCode} from '@fortawesome/free-solid-svg-icons';
import Top from './Top';
import AboutMe from './AboutMe';
import SkillSet from './SkillSet';
import Works from './Works';

library.add(fab,faCode);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route exact path='/' component={Top} />
                <Route path='/aboutme' component={AboutMe} />
                <Route path='/skillset' component={SkillSet} />
                <Route path='/works' component={Works} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
