import { useSelector } from "react-redux";
import { StateModel } from "../../models/StateModel";
import StepsContainer from "./Steps/StepsContainer";
import "./styles.css";

function Progress() {
  const steps = useSelector((state: StateModel) => state.steps);
  const currentStep = useSelector((state: StateModel) => state.step);

  return (
    <section className="layout-main-container__progress-container">
      <section className="progress-hader">
        <h1 className="progress-header__title">Progreso</h1>
      </section>
      <h2 className="progress-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eius odio
        pariatur debitis nihil eveniet hic commodi ratione est dolorem, libero,
        natus nulla aliquam officiis. Harum placeat maxime necessitatibus optio!
      </h2>
      <StepsContainer steps={steps} currentStep={currentStep}/>
    </section>
  );
}

export default Progress;
