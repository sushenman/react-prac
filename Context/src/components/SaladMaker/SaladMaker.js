import React, { createContext, useReducer } from 'react';
import { createUseStyles } from 'react-jss';
import SaladBuilder from '../SaladBuiler/SaladBuilder';
import SaladSummary from '../SaladSummary/SaladSummary';

const useStyles = createUseStyles({
    wrapper: {
        textAlign: 'center',
    }
});

export const SaladContext = createContext();

function reducer(state, item) {
    return [...state, item]
}

export default function SaladMaker() {
    const classes = useStyles();
    const [salad, setSalad] = useReducer(reducer, []);
    return ( <
        >
        <
        SaladContext.Provider value = {
            { salad, setSalad }
        } >
        <
        h1 className = { classes.wrapper } >
        <
        span role = "img" > 🥗 < /span>
        Build Your Custom Salad!
        <
        span role = "img" > 🥗 < /span> < /
        h1 >

        <
        SaladBuilder / >
        <
        SaladSummary / >
        <
        /SaladContext.Provider> < / >
    )
}