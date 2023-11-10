import React, {useContext, useEffect, useState} from 'react'
import '../styles/Contact.css';
import Footer from "../components/Footer";
import Header from "../components/Header";
import emailjs from "emailjs-com";
import Notiflix from 'notiflix';

const Contact = () => {
    const [currectStep, setcurrentStep] = useState('lovestory');
    const [currentStepPl, setcurrentStepPl] = useState('lovestory');
    const [email, setEmail] = useState('lovestory');
    const [content, setContent] = useState('lovestory');

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_5eji14j', 'template_zbvtds9', e.target, 'P8-iwYgkRgqFDRiJ9')
            .then((result) => {
                console.log(result.text);
                Notiflix.Notify.success('Wysłano');
            }, (error) => {
                console.log(error.text);
                Notiflix.Notify.failure('Coś poszło nie tak');

            });
        e.target.reset()
    }


    useEffect(()=> {

        switch (currectStep) {
            case 'lovestory':
                setcurrentStepPl('Wasze imiona');
                setEmail('Adres Email')
                setContent('Napiszcie mi coś o sobie, jakie miejsca lubicie i jak spędzacie wspólny czas, może wpadniecie do mnie z czworonożnym przyjacielem, lub będie to sesja rodzinna. Pozwólcie się leiej poznać. ')
                break;
            case 'women':
                setcurrentStepPl('Twoje imię');
                setEmail('Adres Email')
                setContent('Napisz mi coś o sobie, jaki rodzaj sesji cię interesuje, bardziej sensualna, mocna i stanowcza a może chcesz abym ja coś zaproponowała?')
                break;
            case 'reportage':
                setcurrentStepPl('Twoje imię');
                setEmail('Adres Email')
                setContent('Napisz proszę co to będzie za wydarzenie, kiedy się odbędzie oraz gdzie. Jakie masz pytania, oraz jaki okres czasu cię interesuje? Może zdjęcia tylko z kościoła, a może cała impreza')
                break;
            default:
                break;
        }
    },[currectStep])


    return (
        <div>
            <Header/>
            <div className="nav-contact">
            <div className="contact-text">
                    <hr/> kontakt <hr/>
                </div>
                <div className="contact-desc">
                <p>Jeśli spodobały Ci się moje zdjęcia i masz więcej pytań/chcesz zapytać o ofertę napisz do mnie wiadomość </p>
                </div>
                <div className="contact-line"></div>
            </div>
                <div className="contact-line"></div>
            <div className="contact-text">
                <p>wybierz temat wiadomości</p>
            </div>


            <div className='contact-options'>
                <div className="contact-options-div">
                    <p className={currectStep == 'lovestory' ? 'selectedOption' :''} onClick={()=>{setcurrentStep('lovestory')}}>love story</p>
                    <p className={currectStep == 'women' ? 'selectedOption' :''} onClick={()=>{setcurrentStep('women')}}>sesja kobieca</p>
                    <p className={currectStep == 'reportage' ? 'selectedOption' :''} onClick={()=>{setcurrentStep('reportage')}}>reportaż</p></div>
            </div>

            <div className="form">
                <form className="form-contact" onSubmit={sendEmail}>
                    <label>
                        <input type="text" name="name" placeholder={currentStepPl} />
                    </label>
                    <label>
                        <input type="email" name="email"  placeholder={email}/>
                    </label>
                    <div className='message'>
                        <label>
                            <textarea name="content" placeholder={content} className="message"></textarea>
                        </label>
                    </div>
                    <input type="submit" className="send-message" value=" WYŚLIJ"></input>
                </form>
            </div>
            <div className="reservation-text">
                <hr/> zarezerwuj sesję  <hr/>
            </div>
            <div className="background-date-reservation">
                <div>
                </div>
            </div>
            <Footer/>
        </div>


    );
};

export default Contact;
