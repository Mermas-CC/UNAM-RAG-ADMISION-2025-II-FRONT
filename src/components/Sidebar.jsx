import { FaMoon, FaSun, FaGraduationCap, FaFileAlt, FaCalendarAlt, FaHeadset } from 'react-icons/fa';

const Sidebar = ({ theme, toggleTheme, sendExampleMessage }) => {
  const logoSrc = theme === 'light' ? '/logo_aimara_white.png' : '/logo_aimara_dark.png';

  return (
    <aside className="sidebar" id="sidebar">
      <div className="sidebar-header">
        <a href="https://www.aimaralab.com" target="_blank">
          <img 
            id="aimara-logo" 
            src={logoSrc}
            alt="AIMARA Logo" 
            className=""
          />
        </a>
      </div>
      
      <h2 className="sidebar-title">Sugerencias</h2>
      <div className="example-prompts-sidebar">
        <div className="example-prompt-sidebar" onClick={() => sendExampleMessage('¿Como funciona el Proceso de admisión?')}>
          <FaGraduationCap className="prompt-icon" />
          <div>
            <div className="prompt-title">Proceso de admisión</div>
            <div className="prompt-desc">Pasos, requisitos y cronograma.</div>
          </div>
        </div>
        <div className="example-prompt-sidebar" onClick={() => sendExampleMessage('¿Cuáles son los documentos requeridos?')}>
          <FaFileAlt className="prompt-icon" />
          <div>
            <div className="prompt-title">Documentos requeridos</div>
            <div className="prompt-desc">Lista completa para la inscripción.</div>
          </div>
        </div>
        <div className="example-prompt-sidebar" onClick={() => sendExampleMessage('¿Cuáles son las fechas importantes?')}>
          <FaCalendarAlt className="prompt-icon" />
          <div>
            <div className="prompt-title">Fechas importantes</div>
            <div className="prompt-desc">Fechas clave del proceso.</div>
          </div>
        </div>
        <div className="example-prompt-sidebar" onClick={() => sendExampleMessage('¿Cómo puedo contactar y obtener soporte?')}>
          <FaHeadset className="prompt-icon" />
          <div>
            <div className="prompt-title">Contacto y soporte</div>
            <div className="prompt-desc">Habla con nuestro equipo.</div>
          </div>
        </div>
      </div>
      <br/>
      <h2 className="sidebar-title">Acerca de Chatbot</h2>
      <div className="prompt-desc">Este asistente virtual fue desarrollado por AIMARA LAB para simplificar el proceso de admisión.</div>

      <div className="sidebar-footer">
        <div className="sidebar-controls">
          <button onClick={() => window.location.reload()} className="w-full h-10 flex items-center justify-center" title="Nueva Conversación">
            <p>Nuevo Chat</p>
          </button>
          <button onClick={toggleTheme} className="w-full h-10 flex items-center justify-center" title="Cambiar Tema">
            {theme === 'light' ? <FaMoon className="text-lg" /> : <FaSun className="text-lg" />}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
