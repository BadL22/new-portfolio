import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    const serviceId = 'service_xn1zxyp';
    const templateId = 'template_8tlkpcd';
    const userId = '_bj7etUQLi3K9324A';
    
    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        setFormSubmitted(true);
        setIsLoading(false);
        
        setTimeout(() => {
          setFormData({
            from_name: '',
            reply_to: '',
            subject: '',
            message: ''
          });
          setFormSubmitted(false);
        }, 5000);
      })
      .catch((err) => {
        setError(`Error: ${err.text || 'Failed to send message'}`);
        setIsLoading(false);
      });
  };

  return (
    <section className="section section-light">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>I'm currently looking for front-end development internship opportunities. Feel free to reach out!</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>brandonladouceur17@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>(705)206-0589</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Desbarats, Ontario</span>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/BadL22" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/brandon-ladouceur-152216236/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            {formSubmitted ? (
              <div className="form-success">
                <h3>Thank you!</h3>
                <p>Your message has been sent successfully. I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="from_name">Name</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="reply_to">Email</label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    value={formData.reply_to}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                {error && <div className="form-error">{error}</div>}
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;