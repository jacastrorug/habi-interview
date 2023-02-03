import React from "react";
import { StepModel } from "../../../models/StepModel";

interface ComponentProps {
  step: StepModel;
  completed?: boolean;
  active?: boolean;
}

export default function StepItem(props: ComponentProps) {
  const { step, completed, active } = props;
  return (
    <article
      className={`progress-item ${completed ? "item-completed" : ""} 
      ${active ? "item-active" : ""}`}
    >
      <p>{step.name}</p>
    </article>
  );
}
