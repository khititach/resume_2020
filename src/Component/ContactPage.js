import React from 'react'

import Footer from './footer'

import {DataEn} from './DataEn'

function ContactPage () {

    return (
        <>
            <div id="contact" className="App-contact-header">
                <div className="bg-blur-contactpage">
                    <div className="title-contact">
                        <span className="title-contact-text">CONTACT</span>
                    </div>
                    <div className="contact-div">
                        <div className="body-contact">
                            <img src={DataEn.Contact.Facebook.image} alt="fb" className="contact-img" />
                            <span className="contact-span">: <a href="https://www.facebook.com/kyonkung/">{DataEn.Contact.Facebook.name}</a></span>
                        </div>
                        <div className="body-contact">
                            <img src={DataEn.Contact.Gmail.image} alt="gmail" className="contact-img" />
                            <span className="contact-span">: {DataEn.Contact.Gmail.name}</span>
                        </div>
                        <div className="body-contact">
                            <img src={DataEn.Contact.Instagram.image} alt="ig" className="contact-img" />
                            <span className="contact-span">: <a href="https://www.instagram.com/shirokitsunee/">{DataEn.Contact.Instagram.name}</a> </span>
                        </div>
                    </div>
                   
                </div>
              
            </div>
             <Footer />
        </>
    )
}

export default ContactPage;