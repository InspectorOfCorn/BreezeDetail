// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';

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
                        At [Your Company Name], we believe that a clean car interior not only looks great but
                        also contributes to a more enjoyable and healthier driving experience. That's why we go
                        above and beyond to exceed our customers' expectations with every detailing job.
                    </p>
                </div>
                <div className="about-image">
                    {/* Replace with your actual image */}
                    <img src="/path-to-your-image.jpg" alt="Our detailing team at work" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;