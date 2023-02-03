import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";

import { StateModel } from "../../../models/StateModel";
import MainButton from "../../../pages/Home/MainButton";
import { setCurrentStep } from "../../../redux/actions";
import Options from "../ApartmentOptions/Options";

import { TbParking, TbParkingOff } from "react-icons/tb";
import { BsHouseDoorFill, BsHouseDoor } from "react-icons/bs";

import { OptionModel } from "../../../models/OptionModel";
import "./styles.css";

function ApartmentOptions(props: any) {
  const currentStep = useSelector((state: StateModel) => state.step);

  const options: OptionModel[] = [
    { id: "parking", label: "Con parqueadero", icon: TbParking },
    { id: "no-parking", label: "Sin parqueadero", icon: TbParkingOff },
  ];

  const parkingOptions: OptionModel[] = [
    { id: "covered", label: "Cuvierto", icon: BsHouseDoorFill },
    { id: "uncovered", label: "Descuvierto", icon: BsHouseDoor },
  ];

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedParkingOp, setSelectedParkingOp] = useState<{
    [key: string]: boolean;
  }>({});

  const handleNextStep = () => {
    props.setCurrentStep(currentStep + 1);
  };

  const handleOptionSelected = (id: string) => {
    setSelectedOptions({ [id]: !selectedOptions[id] });
  };

  const handleParkingOptionSelected = (id: string) => {
    setSelectedParkingOp({ [id]: !selectedParkingOp[id] });
  };

  useEffect(() => {
    if (selectedOptions["no-parking"]) setSelectedParkingOp({});
  }, [selectedOptions]);

  return (
    <section className="contact-options-apartment-container d-flex flex-direction-column">
      <h4 className="subtitle">¿Tienes parqueadero?</h4>
      <Options
        options={options}
        selectedOptions={selectedOptions}
        handleOptionSelected={handleOptionSelected}
      />
      {selectedOptions["parking"] && (
        <section className="mt-4">
          <h4 className="subtitle">¿Es cubierto?</h4>
          <Options
            options={parkingOptions}
            selectedOptions={selectedParkingOp}
            handleOptionSelected={handleParkingOptionSelected}
          />
        </section>
      )}
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
