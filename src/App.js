import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';

// import Pet from './Pet';
// If we remove the curly braces, it means import the default export from file
// import { Pet } from "./Pet";

const App = () => {
    const themeHook = useState('green');
    return (
        <React.StrictMode>
            <ThemeContext.Provider value={themeHook}>
                <div>
                    <header>
                        <Link to='/'>Adopt Me!</Link>
                    </header>
                    <Router>
                        <SearchParams path='/' />
                        <Details path='/details/:id' />
                    </Router>
                </div>
            </ThemeContext.Provider>
        </React.StrictMode>
    );
};
render(<App />, document.getElementById('root'));
