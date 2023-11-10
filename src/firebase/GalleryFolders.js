import React, { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom"
import { imagesDb } from './Config';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import '../styles/Stories.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useNavigate} from "react-router-dom";


const params = new URLSearchParams(window.location.pathname);
function GalleryFolders(){
    const [imgUrl, setImgUrl] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const Wszystkie = () => navigate('/Stories');
    const LoveStoryClick = () => navigate('/LoveStory');
    const ReportageClick = () => navigate('/Reportage');
    const WomensClick = () => navigate('/Womens');
    const PregnancyClick = () => navigate('/Pregnancy');

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        listAll(ref(imagesDb, searchParams.get("name")))
            .then((imgs) => {
                const downloadPromises = imgs.items.map((item) => getDownloadURL(item));
                return Promise.all(downloadPromises);
            })
            .then((urls) => {
                setImgUrl(urls);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Błąd pobierania URL-ów:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Header/>
            <div className="tags-container">
                <div className="tags-container-div">
                    <text className="wszystkie-historie" onClick={Wszystkie}>WSZYSTKIE HISTORIE</text>
                    <text onClick={LoveStoryClick}>LOVE STORY</text>
                    <text onClick={ReportageClick}>REPORTAŻE</text>
                    <text onClick={WomensClick}>KOBIECE</text>
                    <text onClick={PregnancyClick}>CIĄŻOWE</text>
                </div>
            </div>

            <div className='gallery-container'>
                {loading ? (
                    <div className="dot-spinner">
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                    </div>
                ):(

                    imgUrl.map((dataVal) => (
                    <div key={dataVal} className='images'>
                        <img src={dataVal} className="galleryimages"/>
                    </div>
                ))
                    )}
            </div>
            <Footer/>
        </div>
    );
}
export default GalleryFolders;
