import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Clock,Test1} from './screens/project-list/test'
import { SearchPanel } from './screens/project-list/search-panel';
import {ProjectListScreen} from './screens/project-list/index'

function App() {
  return (
    <div className="App">
      {/* <Clock/> */}
      {/* <Test1/> */}
      <ProjectListScreen />

    </div>
  );
}

export default App;
