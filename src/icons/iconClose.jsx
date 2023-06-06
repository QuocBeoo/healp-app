import { UtilsConst } from "@/lib/definitions/UtilsConst";

function IconClose(props) {
  const {
    width = UtilsConst.variableCSS.sizeIconDef,
    height = UtilsConst.variableCSS.sizeIconDef,
    color = UtilsConst.variableCSS["primary-400"],
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect opacity="0.01" width="32" height="32" fill={color} />
      <path d="M7 7L26 26" stroke={color} strokeWidth="3" />
      <path d="M7 26L26 7" stroke={color} strokeWidth="3" />
    </svg>
  );
}
export default IconClose;
