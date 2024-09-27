// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';
import VanTrunk_Before from './images/VanTrunk_Before.jpg';
import VanTrunk_After from './images/VanTrunk_After.jpg';
import VanMiddleSeat_Before from './images/VanMiddleSeat_Before.jpg';
import VanMiddleSeat_After from './images/VanMiddleSeat_After.jpg';
import VanBackSeat_Before from './images/VanBackSeat_Before.jpg';
import VanBackSeat_After from './images/VanBackSeat_After.jpg';
import VanFrontSeat_Before from './images/VanFrontSeat_Before.jpg';
import VanFrontSeat_After from './images/VanFrontSeat_After.jpg';





const AboutUs = () => {

    return (
        <section className="about-us">
            <h2>About Our Car Interior Detailing Service</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Welcome to Breeze Detailing, where we specialize in transforming car interiors into pristine,
                        luxurious spaces. With over 3 years of experience in the automotive detailing industry,
                        we've built a reputation for excellence and attention to detail.
                    </p>
                    <p>
                        Our team of certified professionals is passionate about cars and committed to delivering
                        the highest quality service. We use state-of-the-art equipment and premium, eco-friendly
                        products to ensure your vehicle receives the best care possible.
                    </p>
                    <p>
                        At Breeze Mobile Detailing, we believe that a clean car interior not only looks great but
                        also contributes to a more enjoyable and healthier driving experience. That's why we go
                        above and beyond to exceed our customers' expectations with every detailing job.
                    </p>
                </div>
                <div>
                <img className='about-image' src={VanFrontSeat_Before} alt='' onMouseOver = {e => (e.currentTarget.src = VanFrontSeat_After)} onMouseOut={e => (e.currentTarget.src = VanFrontSeat_Before)} />
                <img className= 'about-image' src={VanBackSeat_Before} alt = '' onMouseOver = {e => (e.currentTarget.src = VanBackSeat_After)} onMouseOut={e => (e.currentTarget.src = VanBackSeat_Before)} />
                </div>
                <div>
                <img className= 'about-image' src={VanMiddleSeat_Before} alt= '' onMouseOver= {e => (e.currentTarget.src = VanMiddleSeat_After)} onMouseOut={e=> (e.currentTarget.src = VanMiddleSeat_Before)}/>
                <img className='about-image' src={VanTrunk_Before} alt='' onMouseOver = {e => (e.currentTarget.src = VanTrunk_After)} onMouseOut={e => (e.currentTarget.src = VanTrunk_Before)}/>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;