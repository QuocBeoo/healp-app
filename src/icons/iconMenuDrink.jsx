import { UtilsConst } from "@/lib/definitions/UtilsConst";

function IconMenuDrink(props) {
  const {
    width = UtilsConst.variableCSS.sizeIconMenu.drink.w,
    height = UtilsConst.variableCSS.sizeIconMenu.drink.h,
    color = UtilsConst.variableCSS.light,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_26986_130)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34 4.04639C31.7853 4.04639 29.9036 2.30713 29.9036 0H4.14856C4.14856 2.30396 2.21631 4.04639 0 4.04639V6.66712H34V4.04639ZM1.70044 9.99988L6.90674 40H27.2008L32.3013 9.99988H1.70044ZM28.2861 13.3264L27.1519 20H6.95397L5.81981 13.3264H28.2861ZM9.78723 36.6672L8.6532 30.0001H25.4528L24.3203 36.6672H9.78723Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_26986_130">
          <rect width="34" height="40" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconMenuDrink;
