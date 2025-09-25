import { useEffect } from 'react';
import { FaRobot, FaTimes, FaGraduationCap } from 'react-icons/fa';

const WelcomeModal = ({ onClose, theme }) => {
  const logoSrc = theme === 'light' ? '/logo_aimara_white.png' : '/logo_aimara_dark.png';

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
          <div className="welcome-modal-logo">
            <img src={logoSrc} alt="AIMARA Logo" />
          </div>
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
              Estoy aquí para ayudarte con:
            </p>
            
            <div className="welcome-modal-features">
              <div className="welcome-feature-item">
                <FaGraduationCap className="feature-icon" />
                <div>
                  <strong>Proceso de Admisión</strong>
                  <span>Pasos, requisitos y cronograma detallado</span>
                </div>
              </div>
              
              <div className="welcome-feature-item">
                <FaRobot className="feature-icon" />
                <div>
                  <strong>Documentos Requeridos</strong>
                  <span>Lista completa de documentos necesarios</span>
                </div>
              </div>
              
              <div className="welcome-feature-item">
                <FaGraduationCap className="feature-icon" />
                <div>
                  <strong>Fechas Importantes</strong>
                  <span>Calendario de eventos y fechas límite</span>
                </div>
              </div>
            </div>

            <p className="welcome-modal-footer-text">
              Desarrollado por <strong>AIMARA LAB</strong> para simplificar tu proceso de admisión.
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
