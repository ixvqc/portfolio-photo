import React, { useEffect, useState } from "react";
import { imagesDb } from './Config';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import '../styles/Stories.css';

function PregnancyUpload(){
    const [img, setImg] = useState([]);
    const [imgUrl, setImgUrl] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleClick = async () => {
        if (img.length > 0) {
            const uploadPromises = [];

            for (let i = 0; i < img.length; i++) {
                const file = img[i];
                const imgRef = ref(imagesDb, `lovestory/${v4()}`);
                const uploadTask = uploadBytes(imgRef, file);

                try {
                    const snapshot = await uploadTask;
                    const url = await getDownloadURL(snapshot.ref);
                    setImgUrl((data) => [...data, url]);
                } catch (error) {
                    console.error("Błąd przesyłania pliku:", error);
                }
            }
        }
    }

    useEffect(() => {
        listAll(ref(imagesDb, "lovestory"))
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
                    <br />
                </div>
            ))
                )}
        </div>
    );
}

export default PregnancyUpload;
