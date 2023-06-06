import { DataFooter } from "@/lib/data/dataFooter";
import { Link } from "react-router-dom";

function FooterDef() {
  const dataFooter = DataFooter.listFooter;
  return (
    <footer className="bg-dark-500">
      <div className="max-w-[960px] mx-auto pl-4 min-height-footer py-8 gap-11 text-light text-[11px] flex flex-col sm:flex-row sm:items-center sm:py-0 font-light">
        {dataFooter?.map((itemFooter, index) => (
          <Link to={itemFooter?.link} key={index}>
            <span className="hover:text-primary-400">{itemFooter?.title}</span>
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default FooterDef;
