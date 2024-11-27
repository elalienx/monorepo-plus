// Project files
import "./button.css";
import Image from "../assets/credit-card.png";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      <img src={Image} />
      {label}
    </button>
  );
}
