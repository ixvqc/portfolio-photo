import React, { useEffect, useState } from "react";
import { imagesDb } from './Config';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import '../styles/Stories.css';

function ReportageUpload(){
    const [img, setImg] = useState([]);
    const [imgUrl, setImgUrl] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        listAll(ref(imagesDb, "reportage"))
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
        <div className='pictures-gallery'>
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
                <div key={dataVal} className='photos'>
                    <img src={dataVal} className="galleryimages"/>
                </div>
            ))
                )}
        </div>
    );
}

export default ReportageUpload;
