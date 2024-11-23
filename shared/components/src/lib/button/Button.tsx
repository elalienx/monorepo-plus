// Project files
import "./button.css";

interface Props {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: Props) {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
