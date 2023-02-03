import { FaLocationArrow } from "react-icons/fa";
import { connect, useSelector } from "react-redux";
import { InputType } from "../../../models/InputType";
import { StateModel } from "../../../models/StateModel";
import MainButton from "../../../pages/Home/MainButton";
import { setCurrentStep } from "../../../redux/actions";
import Input from "../Input";

import "./styles.css";

function Address(props: any) {
  const currentStep = useSelector((state: StateModel) => state.step);

  const handleNextStep = () => {
    props.setCurrentStep(currentStep + 1);
  };

  return (
    <section className="contact-address-container d-flex flex-direction-column">
      <h4 className="subtitle">¿Dónde se encuentra el apartamento?</h4>
      <Input type={InputType.TEXT} label="Address" icon={FaLocationArrow} />
      <section className="contact-action-container d-flex">
        <MainButton label="Siguiente" handleClick={handleNextStep} />
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  setCurrentStep
}

export default connect(null, mapDispatchToProps)(Address);
