const RegisterModal = ({ handleClose, showRegistration, children }) => {
    const showHideClassName = showRegistration ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button className="cancelRegistrationBtn" onClick={handleClose}>Cancel</button>
        </section>
      </div>
    );
  };

  export default RegisterModal;