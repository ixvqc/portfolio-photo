import React, { useEffect, useState, navigate } from "react";
import { imagesDb } from './Config';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import '../styles/PhotoFolders.css';
import {useNavigate} from "react-router-dom";

function ZuziaTosiaOla(){
    const [randomImage, setRandomImage] = useState(null);
    const [random, setRandom] = useState(null);
    const [randomMartynaBartek, setrandomMartynaBartek] = useState(null);
    const [randomKasiaTomek, setrandomKasiaTomek] = useState(null);
    const [randomAngelikaiRadek, setrandomAngelikaiRadek] = useState(null);
    const [randomEwa, setrandomEwa] = useState(null);
    const navigate = useNavigate();
    const OlaZuziaTosia = () => navigate('/GalleryFolders?name=OlaZuziaTosia');
    const ewa = () => navigate('/GalleryFolders?name=ewa');
    const Angelika = () => navigate('/GalleryFolders?name=angelika');
    const MartynaiBartek = () => navigate('/GalleryFolders?name=MartynaiBartek');
    const KasiaTomekMaks = () => navigate('/GalleryFolders?name=KasiaTomekMaks');
    const AngelikaRadek = () => navigate('/GalleryFolders?name=AngelikaRadek');
    const [loading, setLoading] = useState(true);


    // Ola Zuzia Tosia
    useEffect(() => {
        // Pobierz listę wszystkich dostępnych zdjęć z Firebase Storage
        listAll(ref(imagesDb, "OlaZuziaTosia"))
            .then((imgs) => {
                const downloadPromises = imgs.items.map((item) => getDownloadURL(item));
                return Promise.all(downloadPromises);
            })
            .then((urls) => {
                // Wybierz losowe zdjęcie z listy URL-ów
                const randomIndex = Math.floor(Math.random() * urls.length);
                setRandomImage(urls[randomIndex]);
                setLoading(false);

            })
            .catch((error) => {
                console.error("Błąd pobierania URL-ów:", error);
                setLoading(false);

            });
    }, []);

    // Angelika
    useEffect(() => {
        // Pobierz listę wszystkich dostępnych zdjęć z Firebase Storage
        listAll(ref(imagesDb, "angelika"))
            .then((imgs) => {
                const downloadPromises = imgs.items.map((item) => getDownloadURL(item));
                return Promise.all(downloadPromises);
            })
            .then((urls) => {
                // Wybierz losowe zdjęcie z listy URL-ów
                const randomIndex = Math.floor(Math.random() * urls.length);
                setRandom(urls[randomIndex]);
                setLoading(false);

            })
            .catch((error) => {
                console.error("Błąd pobierania URL-ów:", error);
                setLoading(false);

            });
    }, []);

    // Martyna i Bartek
    useEffect(() => {
        // Pobierz listę wszystkich dostępnych zdjęć z Firebase Storage
        listAll(ref(imagesDb, "MartynaiBartek"))
            .then((imgs) => {
                const downloadPromises = imgs.items.map((item) => getDownloadURL(item));
                return Promise.all(downloadPromises);
            })
            .then((urls) => {
                // Wybierz losowe zdjęcie z listy URL-ów
                const randomIndex = Math.floor(Math.random() * urls.length);
                setrandomMartynaBartek(urls[randomIndex]);
                setLoading(false);

            })
            .catch((error) => {
                console.error("Błąd pobierania URL-ów:", error);
                setLoading(false);

            });
    }, []);

    // Kasia Tomek i Maks
    useEffect(() => {
        // Pobierz listę wszystkich dostępnych zdjęć z Firebase Storage
        listAll(ref(imagesDb, "KasiaTomekMaks"))
            .then((imgs) => {
                const downloadPromises = imgs.items.map((item) => getDownloadURL(item));
                return Promise.all(downloadPromises);
            })
            .then((urls) => {
                // Wybierz losowe zdjęcie z listy URL-ów
                const randomIndex = Math.floor(Math.random() * urls.length);
                setrandomKasiaTomek(urls[randomIndex]);
                setLoading(false);

            })
            .catch((error) => {
                console.error("Błąd pobierania URL-ów:", error);
                setLoading(false);

            });
    }, []);

    // Angelika i Radek
    useEffect(() => {
        // Pobierz listę wszystkich dostępnych zdjęć z Firebase Storage
        listAll(ref(imagesDb, "AngelikaRadek"))
            .then((imgs) => {
                const downloadPromises = imgs.items.map((item) => getDownloadURL(item));
                return Promise.all(downloadPromises);
            })
            .then((urls) => {
                // Wybierz losowe zdjęcie z listy URL-ów
                const randomIndex = Math.floor(Math.random() * urls.length);
                setrandomAngelikaiRadek(urls[randomIndex]);
                setLoading(false);

            })
            .catch((error) => {
                console.error("Błąd pobierania URL-ów:", error);
                setLoading(false);

            });
    }, []);

    //Ewcia
    useEffect(() => {
        // Pobierz listę wszystkich dostępnych zdjęć z Firebase Storage
        listAll(ref(imagesDb, "ewa"))
            .then((imgs) => {
                const downloadPromises = imgs.items.map((item) => getDownloadURL(item));
                return Promise.all(downloadPromises);
            })
            .then((urls) => {
                // Wybierz losowe zdjęcie z listy URL-ów
                const randomIndex = Math.floor(Math.random() * urls.length);
                setrandomEwa(urls[randomIndex]);
                setLoading(false);

            })
            .catch((error) => {
                console.error("Błąd pobierania URL-ów:", error);
                setLoading(false);

            });
    }, []);

    return (
        <div className='OlaZuziaTosia-container'>
   {/*Ola Zuzia i Tosia*/}
            <div className='OlaZuziaTosia'>
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
                randomImage && (
                    <div className="random-image">
                        <img src={randomImage} alt="Random"
                             onClick={OlaZuziaTosia}/>
                    </div>
                )
                    )}

                <div className='desc-olazuziatosia'>
                    <p  onClick={OlaZuziaTosia}>OLA ZUZIA I TOSIA</p>
                </div>
            </div>
    {/*Angelika*/}
            <div className='OlaZuziaTosia'>
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
                random && (
                    <div className="random-image">
                        <img src={random} alt="Random"  onClick={Angelika}/>
                    </div>
                )
                    )}
                <div className='desc-olazuziatosia' onClick={Angelika}>
                    <p>ANGELIKA</p>
                </div>
            </div>
    {/*Martyna i Bartek*/}
            <div className='OlaZuziaTosia'>
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
                randomMartynaBartek && (
                    <div className="random-image">
                        <img src={randomMartynaBartek} alt="Random" onClick={MartynaiBartek}/>
                    </div>
                )
                    )}
                <div className='desc-olazuziatosia' onClick={MartynaiBartek}>
                    <p>MARTYNA I BARTEK</p>
                </div>
            </div>
    {/*Kasia Tomek i Maks*/}
            <div className='OlaZuziaTosia'>
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
                randomKasiaTomek && (
                    <div className="random-image">
                        <img src={randomKasiaTomek} alt="Random" onClick={KasiaTomekMaks} />
                    </div>
                )
                    )}
                <div className='desc-olazuziatosia' onClick={KasiaTomekMaks}>
                    <p>KASIA TOMEK I MAKS</p>
                </div>
            </div>
    {/*Angelika i Radek*/}
            <div className='OlaZuziaTosia'>
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
                randomAngelikaiRadek && (
                    <div className="random-image">
                        <img src={randomAngelikaiRadek} alt="Random"  onClick={AngelikaRadek}/>
                    </div>
                )
                    )}
                <div className='desc-olazuziatosia' onClick={AngelikaRadek}>
                    <p>ANGELIKA I RADEK</p>
                </div>
            </div>
    {/*Ewcia*/}
            <div className='OlaZuziaTosia'>
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
                randomEwa && (
                    <div className="random-image">
                        <img src={randomEwa} alt="Random" onClick={ewa} />
                    </div>
                )
                    )}
                <div className='desc-olazuziatosia'>
                    <p>EWA</p>
                </div>
            </div>
        </div>
    );
}

export default ZuziaTosiaOla;
