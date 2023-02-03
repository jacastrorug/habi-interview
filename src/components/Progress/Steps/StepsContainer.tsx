import React from "react";
import { StepModel } from "../../../models/StepModel";
import StepItem from "./StepItem";

interface ComponentProps {
  steps: StepModel[];
  currentStep: number;
}

export default function StepsContainer(props: ComponentProps) {
  const { steps, currentStep } = props;

  return (
    <section className="progress-items-container">
      {steps.map((step) => (
        <StepItem key={step.path} step={step} completed={step.index < currentStep} active={step.index === currentStep} />
      ))}
    </section>
  );
}
