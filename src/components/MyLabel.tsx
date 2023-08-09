import "./mylabel.css";

export interface LabelProps {
  /**
   * Label contents
   */
  label: string;
  /**
   * How large should the label be?
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Upper or Lower Case?
   */
  allCaps?: boolean;
  /**
   * Color predetermined
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Selected Color
   */
  fontColor?: string;
}

/**
 * Primary UI component for user interaction
 */
const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}: LabelProps) => {
  return (
    <label
      className={`label ${size} ${!!allCaps && "upperText"} text-${color}`}
      style={{ color: fontColor }}
    >
      {label}
    </label>
  );
};

export default MyLabel;
