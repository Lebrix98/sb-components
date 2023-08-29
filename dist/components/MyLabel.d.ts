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
    /**
   * Selected backgroundColor
   */
    backgroundColor?: string;
}
/**
 * Primary UI component for user interaction
 */
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export default MyLabel;
