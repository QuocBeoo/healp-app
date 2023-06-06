import { useState } from "react";
import { DataMenu } from "@/lib/data/dataMenu";
import { Link } from "react-router-dom";
import MenuItemDef from "./menuItemDef";
import IconClose from "@/icons/iconClose";
import IconMenu from "@/icons/iconMenu";

function MenuDefault() {
  const listMenu = DataMenu.listMenu;

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-center items-center px-2 py-1 rounded hover:bg-light hover:bg-opacity-10 text-primary-400"
      >
        {open ? <IconClose /> : <IconMenu />}
      </button>
      {open && (
        <div
          className={
            "absolute flex flex-col right-0 w-[220px] sm:w-[280px] bg-gray-400 shadow-md mt-3 z-30"
          }
        >
          {listMenu?.map((itemMenu, index) => (
            <Link to={itemMenu?.link} key={index}>
              <MenuItemDef itemMenu={itemMenu} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuDefault;
