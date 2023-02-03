import React from "react";
import "./styles.css";

function DropZoneFile() {
  return (
    <section className="drop-zone-container">
      <span className="drop-zone__title">Suelta la imagen aquí</span>
      ó
      <input type="file" accept="image/*" />
    </section>
  );
}

export default DropZoneFile;
