import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../auth/LoginButton"
import LogoutButton from "../auth/LogoutButton";
import Logo from "../logo256x256.png";
import { NavLink } from "react-router-dom";
import './NavBar.css';
import Day from '../assets/images/day.png';
import Night from '../assets/images/night.png';

export default function NavBar(){
    const { isAuthenticated,user } = useAuth0();

    return (
        <div id="navbar">
            <div id="logo">
                <img src={Logo} width="40" alt="logo"/>
                <NavLink to={"/"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>CAR DESIGN {isAuthenticated ? ' - '+user.name : ''}</NavLink>
            </div>
            <div id="routes">
                <NavLink to={"/profile"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Perfil</NavLink>
                <NavLink to={"/cardesign"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>CAR Design</NavLink>
            </div>
            <div id="log-button">
                {isAuthenticated ? <div className="loginout"><LogoutButton/></div> : <div className="loginout"><LoginButton/></div>}
            </div>
            <img id="daynight" src={Night} alt="ModoOscuro" onClick={() => {
                let image = document.getElementById("daynight");
                if(image.src === Day){
                    image.src = Night;
                    document.body.style.background = "#ffe6e6";
                    document.body.style.color = "#330000";
                }else{
                    image.src = Day;
                    document.body.style.background = "#330000";
                    document.body.style.color = "#ffe6e6";
                }
            }}/>
        </div>
    );
}