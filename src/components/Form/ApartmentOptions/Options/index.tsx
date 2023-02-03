import { OptionModel } from "../../../../models/OptionModel";
import OptionsItem from "./OptionsItem";
import "./styles.css";

interface ComponentProps {
  options: OptionModel[];
  selectedOptions: { [key: string]: boolean };
  handleOptionSelected: (id: string) => void;
}

function Options(props: ComponentProps) {
  const { options, selectedOptions } = props;

  return (
    <section className="contact-options__options">
      {options.map((option) => (
        <OptionsItem
          key={option.id}
          id={option.id}
          label={option.label}
          icon={option.icon}
          active={selectedOptions[option.id]}
          handleClick={props.handleOptionSelected}
        />
      ))}
    </section>
  );
}

export default Options;
