import React from 'react';
import Footer from '../Footer/Footer';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="container full_div ">
            <div>
                <h2>About Us</h2>
                <p>Doctors Care is the largest database of Bangladeshi doctors. We are two brother X & Y are managing this website. We created this website to help people. We always try to make sure the information on our website is up to date on regular basis.</p>
            </div>
            <hr />
            <div>
                <h2>Our Vision</h2>
                <p>Our vision is to provide right information to the patients who are seeking medical consultancy with the relevant health specialist. We are also helping our visitors in locating medical institutes like hospitals, clinics & diagnostic centers in their respective areas.</p>
            </div>
            <hr />
            <div>
                <h2>Our Aim
                </h2>
                <p>Our aim is to deliver authentic information of specialist doctor, chamber, diagnostic center, clinic, etc. We are dedicated to provide credible health information to people & offering suitable platform to the people in health care industry by furnishing them their desired information.

                </p>
            </div>
            <div className="mt-5">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AboutUs;