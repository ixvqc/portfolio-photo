import React, { useState, navigate } from 'react';
import LoveStory from "../components/LoveStory";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/Stories.css';
import {useNavigate} from "react-router-dom";
import ZuziaTosiaOla from "../firebase/ZuziaTosiaOla";
const Stories = () => {
    const navigate = useNavigate();
    const LoveStoryClick = () => navigate('/LoveStory');
    const Wszystkie = () => navigate('/Stories');
    const ReportageClick = () => navigate('/Reportage');
    const WomensClick = () => navigate('/Womens');
    const PregnancyClick = () => navigate('/Pregnancy');

    return (
        <div className="stories-container">
            <Header/>
            <div className="tags-container">
                <div className="tags-container-div">
                    <p className="wszystkie-historie" onClick={Wszystkie}>WSZYSTKIE HISTORIE</p>
                    <p onClick={LoveStoryClick}>LOVE STORY</p>
                    <p onClick={ReportageClick}>REPORTAŻE</p>
                    <p onClick={WomensClick}>KOBIECE</p>
                    <p onClick={PregnancyClick}>CIĄŻOWE</p>
                </div>
            </div>
            <ZuziaTosiaOla/>
            <Footer/>
        </div>

    );
};

export default Stories;
