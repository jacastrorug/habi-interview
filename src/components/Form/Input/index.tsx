import React from "react";
import { InputType } from "../../../models/InputType";
import "./styles.css";
import { IconType } from "react-icons/lib";

interface ComponentProps {
  type: InputType;
  refInput?: React.RefObject<HTMLInputElement>;
  icon?: IconType;
  label?: string;
  minLength?: number;
  maxLength?: number;
  max?: number;
  min?: number;
  required?: boolean;
}

function Input(props: ComponentProps) {
  const Icon = props.icon;
  return (
    <article className="input-container d-flex">
      {props.label && (
        <label className="input-container__label">{props.label}</label>
      )}
      <div className="input-container__input d-flex">
        {Icon && (
          <i className="input-container__input-icon">
            <Icon size="15" />
          </i>
        )}
        <input
          type={props.type}
          required={props.required}
          max={props.max}
          min={props.min}
          minLength={props.minLength}
          maxLength={props.maxLength}
          ref={props.refInput}
        />
      </div>
    </article>
  );
}

export default Input;
