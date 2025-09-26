import { useEffect } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';

const WelcomeModal = ({ onClose, theme }) => {
  useEffect(() => {
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="welcome-modal-overlay" onClick={handleOverlayClick}>
      <div className="welcome-modal-content">
        <button className="welcome-modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="welcome-modal-header">
          <div className="welcome-modal-bot-icon">
            <FaRobot />
          </div>
        </div>

        <div className="welcome-modal-body">
          <h2 className="welcome-modal-title">
            ¡Bienvenido al Asistente de Admisión!
          </h2>
          
          <div className="welcome-modal-description">
            <p>
              Soy tu asistente virtual especializado en el proceso de admisión. 
              ¡Comencemos a conversar!
            </p>
          </div>
          
          <button className="welcome-modal-button" onClick={onClose}>
            Comenzar a conversar
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
