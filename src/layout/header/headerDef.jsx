import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { UtilsConst } from "@/lib/definitions/UtilsConst";
import NavDef from "./nav/navDef";
import MenuDefault from "./menu/menuDef";

function HeaderDefault() {
  return (
    <header className="bg-dark-500">
      <div className="max-w-[960px] min-height-header mx-auto h-full flex items-center">
        <div className="ml-4">
          <Link to={UtilsConst?.page.homePage.url}>
            <LazyLoadImage
              className="w-[85px] cursor-pointer sm:w-[109px] select-none"
              src="/imgs/logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex items-center ml-auto gap-2 sm:gap-14">
          <NavDef />
          <MenuDefault />
        </div>
      </div>
    </header>
  );
}

export default HeaderDefault;
