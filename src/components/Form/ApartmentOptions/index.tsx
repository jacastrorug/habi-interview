import { useState } from "react";
import { connect, useSelector } from "react-redux";

import { StateModel } from "../../../models/StateModel";
import MainButton from "../../../pages/Home/MainButton";
import { setCurrentStep } from "../../../redux/actions";
import Options from "./Options";

import { HiBuildingStorefront } from "react-icons/hi2";
import { MdOutdoorGrill, MdPark } from "react-icons/md";
import { OptionModel } from "../../../models/OptionModel";
import "./styles.css";

function ApartmentOptions(props: any) {
  const currentStep = useSelector((state: StateModel) => state.step);

  const options: OptionModel[] = [
    { id: "bbq", label: "BBQ", icon: MdOutdoorGrill },
    { id: "salon", label: "Salón Comunal", icon: HiBuildingStorefront },
    { id: "parque", label: "Parque de juegos", icon: MdPark },
  ];

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: boolean;
  }>({});

  const handleNextStep = () => {
    props.setCurrentStep(currentStep + 1);
  };

  const handleOptionSelected = (id: string) => {
    setSelectedOptions({ ...selectedOptions, [id]: !selectedOptions[id] });
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

export default connect(null, mapDispatchToProps)(ApartmentOptions);
