import './App.css';
import { Router } from '@reach/router';
import React from 'react';
import Main from './views/Main';
import New from './views/New';
import Details from './views/Details';
import Edit from './views/Edit';
import removeFromDom from './views/Main';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path ="/"/>
        <New path ="pets/new"/>
        <Details removeFromDom={removeFromDom} path ="pets/:id"/>
        <Edit path = "pets/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
