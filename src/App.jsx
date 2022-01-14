//App.js is the main component of a project

import React from 'react';

const App = () => {
    return (
        <>
            <h1>Welcome to React Vite Micro App!</h1>
            <p>Hard to get more minimal.</p>
        </>
    );
};

// We have opened and closed empty bracketss there because the first rule of react is that
// A COMPONENT MUST ALWAYS RETURN A SINGLE ELEMENT.
// so we can either wrap it in a div tag or, if we don't want to use a div tag use an empty tag as here.

export default App;
