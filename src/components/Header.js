import React, { useContext } from 'react'
import '../styles/Header.css';
import Sidebar from "../components/Sidebar";
import {useNavigate} from "react-router-dom";




export default function Navbar() {

    const navigate = useNavigate();
    const aboutmeClick = () => navigate('/aboutMe');
    const offerClick = () => navigate('/Offer');

    const storiesClisk = () => navigate('/stories');
    const contactClick = () => navigate('/contact');
    const logoClick = () => navigate('/');


    return (
                <div className='header'>
                    <Sidebar/>

                    <div className='container-header'>
                            <div className='oMnie'><p onClick={aboutmeClick}>O MNIE</p></div>
                            <div className='oferta'><p onClick={offerClick}>OFERTA</p></div>
                            <div className='logo'><p onClick={logoClick}> julia kontra świat</p></div>
                            <div className='historie'><p onClick={storiesClisk}>HISTORIE</p></div>
                            <div className='kontakt'><p onClick={contactClick}>KONTAKT</p></div>

                    </div>

                </div>
            );
        }

