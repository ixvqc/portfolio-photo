import React, { useContext } from 'react'
import '../styles/AboutMe.css';
import Footer from "../components/Footer";
import Header from "../components/Header";
import myPhoto from "../img/ja.jpeg"
import {TypeAnimation} from "react-type-animation";


export default function AboutMe(){






    return(
        <div>


            <Header/>
    <div className="AboutMe-container">

        <img src={myPhoto} className="myPhoto-aboutme"/>
            <div className="text-aboutme">
                <text className="czesc-aboutme">
                    <TypeAnimation
                        sequence={[
                            'cześć!',
                            2000,
                            'siemka!',
                            2000,
                            'dzień dobry! ',
                            2000,
                            'witaj! ',
                            2000

                        ]}
                        wrapper="span"
                        speed={10}
                        repeat={Infinity}/>
                </text>
                <text className="desc-aboutme">
                    Mam na imię Julia. Fotografuje kobiety, rodziny, miłość i wszystko inne co ukazuje szczęście.
                    Na zdjęciach pragnę ukazać piękno tego świata moimi oczami, ocham zachody słońca nad wodą i tam najczęściej wam proponuje sesję.
                    Moje zdjęcia są autentyczne i pełne emocji,staram się  pokazać uczucie pomiędzy wami czy też sprawić abyście poczuły się niesamowicie pewne siebie.
                </text>
            </div>
    </div>
            <Footer/>
        </div>
    ) ;
};

