import { connect, useSelector } from "react-redux";
import { StateModel } from "../../../models/StateModel";
import MainButton from "../../../pages/Home/MainButton";
import { setCurrentStep } from "../../../redux/actions";

import DropZoneFile from "../DropZoneFile";
import "./styles.css";

function ApartmentPicture(props: any) {
  const currentStep = useSelector((state: StateModel) => state.step);

  const handleNextStep = () => {
    props.setCurrentStep(currentStep + 1);
  };

  return (
    <section className="contact-picture-container d-flex flex-direction-column">
      <h4 className="subtitle">Necesitamos una foto de tu inmueble</h4>
      <DropZoneFile />
      <section className="contact-action-container d-flex">
        <MainButton label="Siguiente" handleClick={handleNextStep} />
      </section>
    </section>
  );
}

const mapDispatchToProps = {
  setCurrentStep,
};

export default connect(null, mapDispatchToProps)(ApartmentPicture);
