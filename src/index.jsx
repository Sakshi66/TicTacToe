// react and react-dom are the core packages that always need
//to be imported to create a react application
import React from 'react';
import ReactDOM from 'react-dom';

//App is the main JavaScript application where our code will be
import App from './App';

// This method will render the App component(entered as the first parameter of the function)
// to the HTML document by using it's id as the refrence(second parameter in the function)

//Note that in the index page, the first div tag has the id root. Inside that div is where
// the whole js will be rendered, If the name of the id there changes, we will need to change
// it here as well to match it.
ReactDOM.render(<App />, document.getElementById('root'));
