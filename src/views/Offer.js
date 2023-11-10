import React, {useContext, useEffect, useState} from 'react'
import '../styles/Offer.css';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Fade } from "react-awesome-reveal";
import { imagesDb } from '../firebase/Config';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from 'react-router-dom';

export default function Offer() {
    const [womenImage, setWomenImage] = useState(null);
    const [lovestoryImage, setlovestoryImage] = useState(null);
    const [reportageImage, setReportageImage] = useState(null);
    const [familyImage, setFamilyImage] = useState(null);
    const navigate = useNavigate();
    const womenClick = () => navigate('/Womens');
    const loveStoryClick = () => navigate('/LoveStory');
    const reportageClick = () => navigate('/reportage');
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
    //rodzinne
    useEffect(() => {
        // Pobierz listę wszystkich dostępnych zdjęć z Firebase Storage
        listAll(ref(imagesDb, "main/family"))
            .then((imgs) => {
                const downloadPromises = imgs.items.map((item) => getDownloadURL(item));
                return Promise.all(downloadPromises);
            })
            .then((urls) => {
                // Wybierz losowe zdjęcie z listy URL-ów
                const randomIndex = Math.floor(Math.random() * urls.length);
                setFamilyImage(urls[randomIndex]);

            })
            .catch((error) => {
                console.error("Błąd pobierania URL-ów:", error);

            });
    }, []);


    return (
        <div className='offer-main'>
            <Header/>

            <div className="nav-offer">
                <div className="stworzmy-offer">
                    <hr/> stwórzmy razem coś pięknego <hr/>
                </div>

                <div className="first-text">
                    <p>
                    Bardzo mi miło, że się tu znalazłeś, to znaczy że zainteresowały Cię moje zdjęcia i chcesz poznać moją ofertę. Jeśli szukasz osoby oddanej swojej pracy, dokładnej i potrafiącej wprowadzić miłą atmosferę na sesji - jesteś w dobrym mejscu!
                    Spójrz co możemy razem stworzyć
                    </p>
                </div>
                <div className="line-offer"></div>
            </div>
            <div className="line-offer"></div>

            <div className="session-offer-container">
                    <Fade cascade damping={0.1} triggerOnce={true}>

                        <div className="women-session-offer">
                            {womenImage && (
                                <img src={womenImage} alt="Random" onClick={womenClick}/>)}

                            <div className="women-text">
                                <text> SESJE KOBIECE</text>
                                <p>Wykonuję sesje zdjęciowe w plenerze jak i studio. Wspólnie ustalimy co najbardziej Cię zadowoli, boho, sensualna a może wizerunkowa?</p>
                            </div>
                        </div>
                        <div className="second-line-offer"></div>
                        <div className="women-session-offer">
                            {reportageImage && (
                                <img src={reportageImage} alt="Random" onClick={reportageClick}/>)}


                            <div className="women-text">
                                <text> REPORTAŻE </text>
                                <p>Wykonuję sesje zdjęciowe w plenerze jak i studio. Wspólnie ustalimy co najbardziej Cię zadowoli, boho, sensualna a może wizerunkowa?</p>
                            </div>
                        </div>
                        <div className="second-line-offer"></div>
                        <div className="women-session-offer">
                            {lovestoryImage && (
                                <img src={lovestoryImage} alt="Random" onClick={loveStoryClick}/>)}



                            <div className="women-text">
                                <text> LOVE STORY</text>
                                <p>
                                    Na pewno macie takie wspólne miejsce na świecie które wiele dla was znaczy, przenieśmy się tam na chwilę i uchwyćmy waszą radość. A nawet jeśli nic nie przychodzi wam do głowy to nic! Zaproponuję wam wiele pięknych zakątków                                </p>
                            </div>
                        </div>
                        <div className="second-line-offer"></div>
                        <div className="women-session-offer">
                            {familyImage && (
                                <img src={familyImage} alt="Random" onClick={loveStoryClick}/>)}
                            <div className="women-text">
                                <text> SESJE RODZINNE </text>
                                <p>
                                    Boicie się, że wasz maluch nie będzie chciał współpracować? Nie ma co się stresować! Kocham dzieci i świetnie potrafię zaangażować je w sesję.                                 </p>
                            </div>
                        </div>
                    </Fade>


            </div>
            <Footer/>
        </div>
    );
}

