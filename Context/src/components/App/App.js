import React from 'react';
import Navigation from '../Navigation/Navigation';
import SaladMaker from '../SaladMaker/SaladMaker';
import UserContext from './../User/User';

const user = {
    name: 'Kwame',
    favourites: [
        'avocado',
        'carrot'
    ]
}

function App() {
    return ( < >
        <
        UserContext.Provider value = { user } >
        <
        Navigation / >
        <
        SaladMaker / >
        <
        /UserContext.Provider> < /
        >
    )
}

export default App;