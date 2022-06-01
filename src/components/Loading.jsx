import React from "react";
import Logo from '../logo512x512.png'
import './Loading.css'

export default function Loading(){
    return(
        <div id="loadingPage">
            <img src={Logo} alt="logo" id="logoLoading" />
            <h1 id="tituloLoading">Loading . . .</h1>
        </div>
    );
}