import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';

// import Pet from './Pet';
// If we remove the curly braces, it means import the default export from file
// import { Pet } from "./Pet";

const App = () => {
    return (
        <React.StrictMode>
            <div>
                <header>
                    <Link to='/'>Adopt Me!</Link>
                </header>
                <Router>
                    <SearchParams path='/' />
                    <Details path='/details/:id' />
                </Router>
            </div>
        </React.StrictMode>
    );
};
render(<App />, document.getElementById('root'));
