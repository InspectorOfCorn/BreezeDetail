// src/components/InfoSection.js
import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
    return (
        <section className="info-section">
            <h2>Why Choose Our Car Interior Detailing Service?</h2>
            <div className="info-grid">
                <div className="info-item">
                    <h3>Expert Technicians</h3>
                    <p>Our team of certified professionals ensures top-quality service for your vehicle.</p>
                </div>
                <div className="info-item">
                    <h3>Premium Products</h3>
                    <p>We use only the finest, eco-friendly cleaning products to protect your car's interior.</p>
                </div>
                <div className="info-item">
                    <h3>Attention to Detail</h3>
                    <p>Every nook and cranny of your car's interior receives our meticulous attention.</p>
                </div>
                <div className="info-item">
                    <h3>Customized Service</h3>
                    <p>We tailor our detailing process to meet your specific needs and preferences.</p>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;