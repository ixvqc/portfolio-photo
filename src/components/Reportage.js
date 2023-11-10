import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/Stories.css';
import {useNavigate} from "react-router-dom";
import ReportageUpload from "../firebase/ReportageUpload";
const Reportage = () => {
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
                    <text className="wszystkie-historie" onClick={ReportageClick}>REPORTAŻE</text>
                    <text onClick={WomensClick}>KOBIECE</text>
                    <text onClick={PregnancyClick}>CIĄŻOWE</text>
                </div>
            </div>
            <ReportageUpload/>
            <Footer/>
        </div>

    );
};

export default Reportage;
