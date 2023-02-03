import { connect, useSelector } from "react-redux";
import { InputType } from "../../../models/InputType";
import { StateModel } from "../../../models/StateModel";
import MainButton from "../../../pages/Home/MainButton";
import { setCurrentStep } from "../../../redux/actions";
import Input from "../Input";
import "./styles.css";
import { FaUserAlt } from "react-icons/fa";

function Names(props: any) {
  const currentStep = useSelector((state: StateModel) => state.step);

  const handleNextStep = () => {
    props.setCurrentStep(currentStep + 1);
  };

  return (
    <section className="contact-names-container d-flex flex-direction-column">
      <h4 className="subtitle">Necesitamos algunos datos personales</h4>
      <Input type={InputType.TEXT} label="Nombre Completo" icon={FaUserAlt} />
      <section className="contact-action-container d-flex">
        <MainButton label="Siguiente" handleClick={handleNextStep} />
      </section>
    </section>
  );
}

const mapDispatchToProps = {
  setCurrentStep,
};

export default connect(null, mapDispatchToProps)(Names);
