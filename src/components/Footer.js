import React, { useContext } from 'react'
import '../styles/Header.css';
import insta from "../img/insta.png";
import facebook from "../img/facebook.png";
import '../styles/main.css';
import {useNavigate} from "react-router-dom";



export default function Navbar() {

    const navigate = useNavigate();

    const instaClick = () => window.location.replace('https://www.instagram.com/juliakontraswiat/');
    const facebookClick = () => window.location.replace('https://www.facebook.com/profile.php?id=100071020543437');

    return (
        <div className="footer-main">
            <div className="footer-main-div">
                <img src={insta} alt={'logo instagram'} onClick={instaClick}/>
                <img src={facebook} alt={'logo facebook'} onClick={facebookClick}/>
            </div>

            <div className="juliakontraswiat-footer">
                <p>julia kontra świat</p>
            </div>

            <div className="footer-main-div">
                POLITYKA PRYWATNOŚCI <br/>
                PROJEKT STRONY:JULIA MARZEC
            </div>
        </div>
    );
}

