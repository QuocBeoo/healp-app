import { useLocation } from "react-router-dom";
import clsx from "clsx";

function NavItemDef(props) {
  const { itemNav } = props;
  const location = useLocation();
  const { pathname } = location;

  return (
    <div
      className={clsx(
        "inline-flex items-center gap-3 px-2 py-1 rounded hover:bg-light hover:bg-opacity-10",
        pathname === itemNav?.link ? "text-primary-400" : "text-light"
      )}
    >
      <span className="relative">
        {itemNav?.icon}
        {itemNav?.notification ? (
          <div className="absolute leading-[1] text-light text-[10px] bg-primary-500 top-[-2px] right-[-8px] min-w-[16px] min-h-[16px] rounded-full flex justify-center items-center px-1">
            {itemNav?.notification}
          </div>
        ) : (
          <></>
        )}
      </span>
      <span className="text-base hidden sm:block">
        {itemNav?.title}
      </span>
    </div>
  );
}

export default NavItemDef;
