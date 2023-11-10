import React, { useState, useEffect } from "react";
import '../styles/Slide.css';
import { imagesDb } from '../firebase/Config';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const delay = 3000;

function Slideshow() {
    const [index, setIndex] = useState(0);
    const [img, setImg] = useState([]);
    const [imgUrl, setImgUrl] = useState([]);

    const handleClick = async () => {
        if (img.length > 0) {
            const uploadPromises = [];

            for (let i = 0; i < img.length; i++) {
                const file = img[i];
                const imgRef = ref(imagesDb, `slideshow/${v4()}`);
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
        listAll(ref(imagesDb, "slideshow"))
            .then((imgs) => {
                const downloadPromises = imgs.items.map((item) => getDownloadURL(item));
                return Promise.all(downloadPromises);
            })
            .then((urls) => {
                setImgUrl(urls);
            })
            .catch((error) => {
                console.error("Błąd pobierania URL-ów:", error);
            });
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) =>
                prevIndex === imgUrl.length - 1 ? 0 : prevIndex + 1
            );
        }, delay);

        return () => clearInterval(intervalId);
    }, [imgUrl]);

    return (
        <div className="slideshow">
            {/*<input type="file" onChange={(e) => setImg(Array.from(e.target.files))} multiple />*/}
            {/*<button onClick={handleClick}>Upload</button>*/}
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {imgUrl.map((imageUrl, idx) => (
                    <img
                        className="slide"
                        key={idx}
                        src={imageUrl}
                        alt={`Slide ${idx + 1}`}
                    />
                ))}
            </div>

            <div className="slideshowDots">
                {imgUrl.map((_, idx) => (
                    <div key={idx} className={`slideshowDot ${idx === index ? 'active' : ''}`}></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;
