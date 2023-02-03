import React from "react";
import { IconType } from "react-icons/lib";

interface ComponentProps {
  id: string;
  icon: IconType;
  label: string;
  active: boolean;
  handleClick: (id: string) => void;
}

function OptionsItem(props: ComponentProps) {
  const Icon = props.icon;
  return (
    <section
      className={`options_item--container ${props.active ? "active" : ""}`}
      onClick={() => props.handleClick(props.id)}
    >
      <section className="options__item">
        <Icon size={60} />
      </section>
      <span className="options__item--label">{props.label}</span>
    </section>
  );
}

export default OptionsItem;
