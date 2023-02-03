import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StateModel } from "../../models/StateModel";
import Form from "../../pages/Form";
import Home from "../../pages/Home";
import Summary from "../../pages/Summary";
import StepValidator from "./StepValidator";

function AppRouter() {
  const steps = useSelector((state: StateModel) => state.steps);

  return (
    <BrowserRouter>
      <StepValidator>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resumen" element={<Summary />} />
          {steps.map(({ path, index, inputs, component }) => {
            return (
              <Route
                key={path}
                path={path}
                element={
                  <Form inputs={inputs} index={index} component={component} />
                }
              />
            );
          })}
        </Routes>
      </StepValidator>
    </BrowserRouter>
  );
}

export default AppRouter;
