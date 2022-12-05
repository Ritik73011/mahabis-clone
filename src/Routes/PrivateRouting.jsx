import { webAuth } from '../Components/AuthFirbase';
import {onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import {Navigate} from 'react-router-dom'
export const PrivateRouting = ({children})=>{
    let [flag,setFlag] = useState(false);
    let [load,setLoad] = useState(false);
    console.log(flag);
    onAuthStateChanged(webAuth, (user) => {
        if (user) {
            setFlag(true);
            setLoad(true)
        } else {
            setFlag(false);
            setLoad(true);
        }
      });
      return load?flag ? children : <Navigate to={'/login'}/>:null;
}