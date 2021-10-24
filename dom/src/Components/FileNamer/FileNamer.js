import React, { useState, useEffect } from "react";
import './FileNamer.css';

export default function FileNamer() {
    const [name, setName] = useState('');
    const [alert, setAlert] = useState(false);
    useEffect(() => {
        const handleWindowClick = () => setAlert(false)
        if (alert) {
            window.addEventListener('click', handleWindowClick);
        } else {
            return () => window.removeEventListener('click', handleWindowClick);
        }
    }, [alert, setAlert]);
    const validate = event => {
        if (/\*/.test(name)) {
            event.preventDefault();
            setAlert(true);
            return;
        }
        setAlert(false);
    };
    return ( <
        div className = "wrapper" >
        <
        div className = "preview" >
        <
        h2 > Preview: < /h2>{name}.js < /
        div > <
        form >
        <
        label >
        <
        p > Name: < /p> <
        input name = "name"
        autoComplete = "off"
        onChange = { event => setName(event.target.value) }

        / > < /
        label > {
            alert &&
            <
            div className = "popup" >
            <
            span role = "img" > ✅ < /span> Alphanumeric Characters <
            br / >
            <
            span role = "img" > ⛔️ < /span> * < /
            div >
        } <
        div >
        <
        button onClick = { validate } > Save < /button> < /
        div > <
        /form> < /
        div >
    )
}