import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    carModel: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
        .then((result) => {
          setSubmitStatus('success');
          setFormData({ fullName: '', phoneNumber: '', carModel: '', message: '' });
        })
        .catch((error) => {
          setSubmitStatus('error');
        })
        .finally(() => {
          setIsSubmitting(false);
        });
  };

  return (
      <div className="contact-form-container">
        <h2>Request Car Interior Detailing</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
            />
          </div>
          <div className="form-group">
            <label htmlFor="carModel">Car Model</label>
            <input
                type="text"
                id="carModel"
                name="carModel"
                value={formData.carModel}
                onChange={handleChange}
                required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Detailed Service Request</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
        {submitStatus === 'success' && (
            <p className="success-message">Thank you for your request. We'll contact you soon!</p>
        )}
        {submitStatus === 'error' && (
            <p className="error-message">There was an error submitting your request. Please try again.</p>
        )}
      </div>
  );
};

export default ContactForm;