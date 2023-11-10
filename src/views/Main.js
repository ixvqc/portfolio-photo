import React, {useRef, useState, navigate, useEffect} from "react";
import '../styles/main.css';
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import { imagesDb } from '../firebase/Config';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

export default function Main() {
    const [MeImage, setMeImage] = useState(null);
    const [womenImage, setWomenImage] = useState(null);
    const [lovestoryImage, setlovestoryImage] = useState(null);
    const [reportageImage, setReportageImage] = useState(null);
    const [contactImage, setContactImage] = useState(null);

    const navigate = useNavigate();
    const aboutmeClick = () => navigate('/aboutMe');
    const womenClick = () => navigate('/Womens');
    const loveStoryClick = () => navigate('/LoveStory');
    const reportageClick = () => navigate('/reportage');
    const Contact = () => navigate('/Contact');

    // Moje zdjęcie
    useEffect(() => {
        // Pobierz listę wszystkich dostępnych zdjęć z Firebase Storage
        listAll(ref(imagesDb, "main/me"))
            .then((imgs) => {
                const downloadPromises = imgs.items.map((item) => getDownloadURL(item));
                return Promise.all(downloadPromises);
            })
            .then((urls) => {
                // Wybierz losowe zdjęcie z listy URL-ów
                const randomIndex = Math.floor(Math.random() * urls.length);
                setMeImage(urls[randomIndex]);

            })
            .catch((error) => {
                console.error("Błąd pobierania URL-ów:", error);

            });
    }, []);
    // Sesje kobiece
    useEffect(() => {
        // Pobierz listę wszystkich dostępnych zdjęć z Firebase Storage
        listAll(ref(imagesDb, "main/women"))
            .then((imgs) => {
                const downloadPromises = imgs.items.map((item) => getDownloadURL(item));
                return Promise.all(downloadPromises);
            })
            .then((urls) => {
                // Wybierz losowe zdjęcie z listy URL-ów
                const randomIndex = Math.floor(Math.random() * urls.length);
                setWomenImage(urls[randomIndex]);

            })
            .catch((error) => {
                console.error("Błąd pobierania URL-ów:", error);

            });
    }, []);
    // love story
    useEffect(() => {
        // Pobierz listę wszystkich dostępnych zdjęć z Firebase Storage
        listAll(ref(imagesDb, "main/lovestory"))
            .then((imgs) => {
                const downloadPromises = imgs.items.map((item) => getDownloadURL(item));
                return Promise.all(downloadPromises);
            })
            .then((urls) => {
                // Wybierz losowe zdjęcie z listy URL-ów
                const randomIndex = Math.floor(Math.random() * urls.length);
                setlovestoryImage(urls[randomIndex]);

            })
            .catch((error) => {
                console.error("Błąd pobierania URL-ów:", error);

            });
    }, []);
    //reportaze
    useEffect(() => {
        // Pobierz listę wszystkich dostępnych zdjęć z Firebase Storage
        listAll(ref(imagesDb, "main/reportage"))
            .then((imgs) => {
                const downloadPromises = imgs.items.map((item) => getDownloadURL(item));
                return Promise.all(downloadPromises);
            })
            .then((urls) => {
                // Wybierz losowe zdjęcie z listy URL-ów
                const randomIndex = Math.floor(Math.random() * urls.length);
                setReportageImage(urls[randomIndex]);

            })
            .catch((error) => {
                console.error("Błąd pobierania URL-ów:", error);

            });
    }, []);
    //kontakt
    useEffect(() => {
        // Pobierz listę wszystkich dostępnych zdjęć z Firebase Storage
        listAll(ref(imagesDb, "main/contact"))
            .then((imgs) => {
                const downloadPromises = imgs.items.map((item) => getDownloadURL(item));
                return Promise.all(downloadPromises);
            })
            .then((urls) => {
                // Wybierz losowe zdjęcie z listy URL-ów
                const randomIndex = Math.floor(Math.random() * urls.length);
                setContactImage(urls[randomIndex]);

            })
            .catch((error) => {
                console.error("Błąd pobierania URL-ów:", error);

            });
    }, []);



    return (
            <div className='body-main'>
                <Header/>
                <Slideshow/>

                <div className="text-nav">
                    <hr/>
                    <TypeAnimation
                        sequence={[
                            'cześć!',
                            2000,
                            'hello!',
                            2000,
                            'hejka! ',
                            2000,
                            'witaj! ',
                            2000

                        ]}
                        wrapper="span"
                        speed={10}
                        repeat={Infinity}/>
                    <hr/>
                </div>

                <div className="aboutme-homepage">

                    <div className="aboutme-homepage-photo">
                        {MeImage && (
                            <img src={MeImage} alt="Random" onClick={aboutmeClick} className="myPhoto"/>)}
                    </div>


                    <div className="aboutme-text-homepage">
                        <div>
                            <p>
                                Mam na imię Julia. Studiuję informatykę, poza pisaniem
                                kodu kocham fotografować ludzi i piękno tego świata - miłość. Specjalizuje się w
                                fotografii rodzinnej oraz sesjach zakochanych i kobiecych.
                                Moje zdjęcia są naturalne i ukazują jak najwięcej emocji. Prywatnie kocham
                                podróżować, jamniczki i zachody słońca.
                            </p>
                        </div>
                        <div>
                            <button onClick={aboutmeClick}> Poznaj mnie lepiej</button>
                        </div>
                    </div>
                </div>
                <div className="stworzmy-razem-container">
                    <div className="kreska-stworzmy-jeden"></div>

                    <div className="background-main">
                        <div className="kreska-stworzmy"></div>
                        <div className="stworzmy"> stwórzmy razem coś pięknego</div>

                        <div className="hej">
                            <div className="create-smth-beautiful-photos">
                                {MeImage && (
                                    <img src={womenImage} alt="Random" onClick={womenClick}/>)}
                                <div className="create-smth-beautiful-buttons">
                                    <button onClick={womenClick}>  sesje kobiece </button>
                                </div>
                            </div>


                            <div className="create-smth-beautiful-photos">
                                {MeImage && (
                                    <img src={lovestoryImage} alt="Random" onClick={loveStoryClick}/>)}
                                <div className="create-smth-beautiful-buttons">
                                    <button onClick={loveStoryClick}> love story </button>
                                </div>
                            </div>


                            <div className="create-smth-beautiful-photos">
                                {MeImage && (
                                    <img src={reportageImage} alt="Random" onClick={reportageClick}/>)}
                                <div className="create-smth-beautiful-buttons">
                                    <button onClick={reportageClick}>  reportaże </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="contact-container">
                    <div className="contact">
                        <hr/>
                        <p>skontaktuj się ze mną</p>
                        <hr/>
                    </div>

                    <div className="contact-background">
                        {MeImage && (
                            <img src={contactImage} alt="Random"/>)}
                        <div className="contact-choices">
                            <button onClick={Contact} > kontakt  </button>
                        </div>
                    </div>


                </div>
                <Footer/>
            </div>


        )
    }





