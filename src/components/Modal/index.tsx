import React from "react";
import { MdClose } from "react-icons/md";
import "./styles.css";

interface ComponentProps extends React.PropsWithChildren {
  setIsOpen: (v: boolean) => void;
}

function Modal(props: ComponentProps) {
  return (
    <>
      <section className="modal-background"></section>
      <section className="modal-container">
        <section className="modal">
          <section
            className="modal-header"
            onClick={() => props.setIsOpen(false)}
          >
            <MdClose size={25} />
          </section>
          {props.children}
        </section>
      </section>
    </>
  );
}

export default Modal;
