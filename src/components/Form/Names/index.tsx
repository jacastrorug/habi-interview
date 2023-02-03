import { useRef } from "react";
import { FaUserAlt } from "react-icons/fa";
import { connect, useSelector } from "react-redux";
import { InputType } from "../../../models/InputType";
import { StateModel } from "../../../models/StateModel";
import MainButton from "../../../pages/Home/MainButton";
import { setCurrentStep, updateForm } from "../../../redux/actions";
import Input from "../Input";
import "./styles.css";

function Names(props: any) {
  const steps = useSelector((state: StateModel) => state.steps);
  const step = useSelector((state: StateModel) => state.step);
  const currentStep = steps[step];

  const fullNameRef = useRef<HTMLInputElement>(null);

  const handleNextStep = () => {
    if (!fullNameRef.current?.value && currentStep.required) {
      return;
    }

    props.updateForm({ full_name: fullNameRef.current?.value });
    props.setCurrentStep(step + 1);
  };

  return (
    <section className="contact-names-container d-flex flex-direction-column">
      <h4 className="subtitle">Necesitamos algunos datos personales</h4>
      <Input
        type={InputType.TEXT}
        label="Nombre Completo"
        icon={FaUserAlt}
        refInput={fullNameRef}
      />
      <section className="contact-action-container d-flex">
        <MainButton label="Siguiente" handleClick={handleNextStep} />
      </section>
    </section>
  );
}

const mapDispatchToProps = {
  setCurrentStep,
  updateForm,
};

export default connect(null, mapDispatchToProps)(Names);
