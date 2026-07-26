import React from 'react';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <section 
      id="contact" 
      style={{ 
        width: '100%',
        position: 'relative', 
        paddingTop: 0,
        paddingBottom: 'clamp(3rem, 6vw, 6rem)',
        paddingLeft: 'clamp(1rem, 4vw, 2.5rem)',
        paddingRight: 'clamp(1rem, 4vw, 2.5rem)',
        background: 'transparent', 
        overflow: 'hidden' 
      }}
    >
      <style>{`
        .contact-grid {
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 3rem; 
          width: 100%; 
          max-width: 1000px; 
          margin: 0 auto;
        }

        .contact-input:focus {
          border-color: #00E599 !important;
          background: rgba(0, 229, 153, 0.03) !important;
          box-shadow: 0 0 15px rgba(0, 229, 153, 0.15), inset 0 0 10px rgba(0, 229, 153, 0.05);
        }

        .contact-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(0,229,153,0.6)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") !important;
          background-repeat: no-repeat !important;
          background-position: right 18px center !important;
        }

        .contact-select option {
          background: #0C0C0F; 
          color: #fff;
          font-family: sans-serif;
        }

        .element-wrapper {
          width: 100%; 
          max-width: 420px; 
          margin: 0 auto; 
          display: flex; 
          flex-direction: column; 
          justify-content: center;
          box-sizing: border-box;
        }

        .element-wrapper * {
          box-sizing: border-box !important;
        }

        @media (min-width: 868px) {
          .contact-grid {
            grid-template-columns: 1fr 1.1fr; 
            gap: 4rem;
            align-items: stretch;
          }
          .element-wrapper {
            margin: 0; 
            max-width: 100%; 
            height: 100%;
          }
        }

        .calendar-frame {
          width: 100%; 
          height: 100%; 
          border: none; 
          background: transparent;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>

      <ContactForm />
    </section>
  );
};

export default Contact;
