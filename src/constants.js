import {useState} from 'react';

//App.js

    // Authentification constants
    export const [authTokens, setAuthTokens] = useState();
    export const setTokens = (data) =>{
        localStorage.setItem("tokens",JSON.stringify(data));
        setAuthTokens(data);
    }

