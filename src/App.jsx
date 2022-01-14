import React from 'react';
//App.js is the main component of a project

import Board from './components/Board';

import './styles/root.scss';

const App = () => {
    return (
        <div className="app">
            <h1>TIC TAC TOE</h1>
            <Board />
        </div>
    );
};

// We have opened and closed div tag there because the first rule of react is that
// A COMPONENT MUST ALWAYS RETURN A SINGLE ELEMENT.
// so we can either wrap it in a div tag or, if we don't want to use a div tag use an empty tag.

export default App;
