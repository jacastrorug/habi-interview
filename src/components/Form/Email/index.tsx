import { connect, useSelector } from "react-redux";
import { InputType } from "../../../models/InputType";
import MainButton from "../../../pages/Home/MainButton";
import Input from "../Input";
import { StateModel } from "../../../models/StateModel";
import { setCurrentStep } from "../../../redux/actions";
import "./styles.css";
import { FaRegEnvelope } from "react-icons/fa";

function Email(props: any) {
  const currentStep = useSelector((state: StateModel) => state.step);

  const handleNextStep = () => {
    props.setCurrentStep(currentStep + 1);
  };

  return (
    <section className="contact-email-container d-flex">
      <h4 className="subtitle">Necesitamos algunos datos personales</h4>
      <Input type={InputType.TEXT} label="Email" icon={FaRegEnvelope} />
      <section className="contact-action-container d-flex">
        <MainButton label="Siguiente" handleClick={handleNextStep} />
      </section>
    </section>
  );
}

const mapDispatchToProps = {
  setCurrentStep,
};

export default connect(null, mapDispatchToProps)(Email);
