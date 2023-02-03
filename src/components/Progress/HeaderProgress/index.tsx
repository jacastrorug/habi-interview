import React from "react";

import "./styles.css";
import habiLogo from "../../../assets/img/habi-logo.png";
import { useSelector } from "react-redux";
import { StateModel } from "../../../models/StateModel";

export default function HeaderProgress(props: React.PropsWithChildren) {
  const steps = useSelector((state: StateModel) => state.steps);
  const step = useSelector((state: StateModel) => state.step);

  const currentStep = steps[step];

  return (
    <header className="progress-header-container">
      <section className="header__logo-container">
        <img src={habiLogo} alt="logo Habi" className="header__logo" />
      </section>
      <section className="progress_from_container">
        {steps.length === step && (
          <section className="header__title-container">
            <h1 className="title-container__title">Resumen</h1>
            <p className="title-container__description"></p>
          </section>
        )}
        {currentStep && (
          <section className="header__title-container">
            <h1 className="title-container__title">
              {currentStep &&
                `Paso ${step + 1} de ${steps.length}: ${currentStep?.name}`}
            </h1>
            <p className="title-container__description">
              {currentStep && currentStep.description}
            </p>
          </section>
        )}
        <section className="progress_form--main-container">
          {props.children}
        </section>
      </section>
    </header>
  );
}
