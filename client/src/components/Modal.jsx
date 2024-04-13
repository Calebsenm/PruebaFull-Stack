
import React from "react";
import ReactDOM from "react-dom";
import styles from "@/components/estilos.module.css" ;


const Modal = ({ onClose, children, title }) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className={styles.modaloverlay}>
      <div className={styles.modalwrapper}>
        <div className={styles.modal}>
          <div className={styles.modalheader}>
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </div>
          {title && <h1>{title}</h1>}
          <div className={styles.modalbody}>{children}</div>
        </div>
      </div>
    </div>
  );

};

export default Modal