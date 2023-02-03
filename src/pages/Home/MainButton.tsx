import { FaLongArrowAltRight } from "react-icons/fa";

interface ComponentProps {
  label: string;
  handleClick: () => void;
}

function MainButton(props: ComponentProps) {
  return (
    <button type="button" className="hero-action--btn" onClick={props.handleClick}>
      {props.label}
      <i className="hero-action--btn__icon">
        <FaLongArrowAltRight />
      </i>
    </button>
  );
}

export default MainButton;
