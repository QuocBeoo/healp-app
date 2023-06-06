import { Link } from "react-router-dom";
import { DataNav } from "@/lib/data/dataNav";
import NavItemDef from "./navItemDef";

function NavDef() {
  const listNav = DataNav.listNav;
  return (
    <nav>
      {listNav?.map((itemNav, index) => (
        <Link to={itemNav?.link} key={index}>
          <NavItemDef itemNav={itemNav} />
        </Link>
      ))}
    </nav>
  );
}

export default NavDef;
