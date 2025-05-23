"use client";

// Project files
import Illustration from "../../assets/credit-card.png";
import "./button.css";

interface ButtonProps {
  /** The button text. */
  label: string;

  /** The action to trigger when press. */
  onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      <img src={Illustration} alt="a credit card icon with a 3d style" />
      {label}
    </button>
  );
}
