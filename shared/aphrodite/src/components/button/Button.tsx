// Project files
import Image from "../../assets/credit-card.png";
import "./button.css";

interface ButtonProps {
  /** The button text. */
  label: string;

  /** The action to trigger when press. */
  onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      <img src={Image} />
      {label}!
    </button>
  );
}
