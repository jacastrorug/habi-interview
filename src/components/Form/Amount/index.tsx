import { BsCurrencyDollar } from "react-icons/bs";
import { connect, useSelector } from "react-redux";
import { InputType } from "../../../models/InputType";
import { StateModel } from "../../../models/StateModel";
import MainButton from "../../../pages/Home/MainButton";
import { setCurrentStep } from "../../../redux/actions";
import Input from "../Input";
import "./styles.css";

function Amount(props: any) {
  const currentStep = useSelector((state: StateModel) => state.step);

  const handleNextStep = () => {
    props.setCurrentStep(currentStep + 1);
  };

  return (
    <section className="contact-amount-container flex-direction-column">
      <h4 className="subtitle">¿En cuanto quieres vender tu inmueble?</h4>
      <Input type={InputType.TEXT} label="Valor" icon={BsCurrencyDollar} />
      <section className="contact-action-container d-flex">
        <MainButton label="Siguiente" handleClick={handleNextStep} />
      </section>
    </section>
  );
}

const mapDispatchToProps = {
  setCurrentStep,
};

export default connect(null, mapDispatchToProps)(Amount);
