import React from "react";
import Input from "../Input";
import { InputType } from "../../../models/InputType";
import MainButton from "../../../pages/Home/MainButton";
import { FaRegBuilding } from "react-icons/fa";
import { connect, useSelector } from "react-redux";
import { StateModel } from "../../../models/StateModel";
import { setCurrentStep } from "../../../redux/actions";

import "./styles.css";

function ApartmentFloor(props: any) {
  const currentStep = useSelector((state: StateModel) => state.step);

  const handleNextStep = () => {
    props.setCurrentStep(currentStep + 1);
  };

  return (
    <section className="contact-floor-container d-flex flex-direction-column">
      <h4 className="subtitle">Información del apartamento</h4>
      <Input
        label="Número de piso"
        type={InputType.NUMBER}
        icon={FaRegBuilding}
        min={1}
        max={50}
      />
      <section className="contact-action-container d-flex">
        <MainButton label="Siguiente" handleClick={handleNextStep} />
      </section>
    </section>
  );
}

const mapDispatchToProps = {
  setCurrentStep,
};

export default connect(null, mapDispatchToProps)(ApartmentFloor);
