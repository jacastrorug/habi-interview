import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { StateModel } from "../../models/StateModel";
import { useNavigate } from "react-router";

export default function StepValidator(props: React.PropsWithChildren) {
  const navigate = useNavigate();
  const steps = useSelector((state: StateModel) => state.steps);
  const currentStep = useSelector((state: StateModel) => state.step);

  useEffect(() => {
    if (currentStep === -1) {
      navigate("/");
      return;
    }

    if (currentStep === steps.length) {
      navigate("/resumen");
      return;
    }

    navigate(steps[currentStep].path);
  }, [currentStep, steps, navigate]);

  return <section {...props}>{props.children}</section>;
}
