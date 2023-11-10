import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/Stories.css';
import {useNavigate} from "react-router-dom";
import WomensUpload from "../firebase/WomensUpload";
const Womens = () => {
    const navigate = useNavigate();

    const Wszystkie = () => navigate('/Stories');
    const LoveStoryClick = () => navigate('/LoveStory');
    const ReportageClick = () => navigate('/Reportage');
    const WomensClick = () => navigate('/Womens');
    const PregnancyClick = () => navigate('/Pregnancy');



    return (
        <div className="stories-container">
            <Header/>
            <div className="tags-container">
                <div className="tags-container-div">
                    <text onClick={Wszystkie}>WSZYSTKIE HISTORIE</text>
                    <text onClick={LoveStoryClick}>LOVE STORY</text>
                    <text onClick={ReportageClick}>REPORTAŻE</text>
                    <text className="wszystkie-historie"  onClick={WomensClick}>KOBIECE</text>
                    <text onClick={PregnancyClick}>CIĄŻOWE</text>
                </div>
            </div>
            <WomensUpload/>
            <Footer/>
        </div>

    );
};

export default Womens;
