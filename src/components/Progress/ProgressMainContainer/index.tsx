import React from "react";
import "./styles.css";
import HeaderProgress from "../HeaderProgress";

function ProgressMainContainer(props: React.PropsWithChildren) {
  return (
    <section className="layout-main-container__form-container">
      <HeaderProgress>{props.children}</HeaderProgress>
    </section>
  );
}

export default ProgressMainContainer;
