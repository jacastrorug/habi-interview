import React, { useState } from "react";

import "./styles.css";
import Modal from "../../Modal";
import Progress from "..";

function ProgressBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const showProgress = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="progress-btn-container">
        <button
          type="button"
          className="hero-action--btn"
          onClick={showProgress}
        >
          Ver progreso
        </button>
      </section>
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <Progress />
        </Modal>
      )}
    </>
  );
}

export default ProgressBtn;
