import { useState } from "react";
import { connect, useSelector } from "react-redux";

import { StateModel } from "../../../models/StateModel";
import MainButton from "../../../pages/Home/MainButton";
import { setCurrentStep } from "../../../redux/actions";
import Options from "../ApartmentOptions/Options";

import { GiElevator, GiStairs } from "react-icons/gi";
import { OptionModel } from "../../../models/OptionModel";
import "./styles.css";

function ApartmentElevator(props: any) {
  const currentStep = useSelector((state: StateModel) => state.step);

  const options: OptionModel[] = [
    { id: "elevator", label: "Tiene elevador", icon: GiElevator },
    { id: "no-elevator", label: "No tiene elevador", icon: GiStairs },
  ];

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: boolean;
  }>({});

  const handleNextStep = () => {
    props.setCurrentStep(currentStep + 1);
  };

  const handleOptionSelected = (id: string) => {
    setSelectedOptions({ [id]: !selectedOptions[id] });
  };

  return (
    <section className="contact-options-apartment-container d-flex flex-direction-column">
      <h4 className="subtitle">Características del apartamento</h4>
      <Options
        options={options}
        selectedOptions={selectedOptions}
        handleOptionSelected={handleOptionSelected}
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

export default connect(null, mapDispatchToProps)(ApartmentElevator);
