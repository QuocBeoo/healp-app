import { DataMenuHistory } from "@/lib/data/dataMenuHistory";
import ItemHistoryCom from "./itemMenuHistoryCom";

function MenuHistoryCom(props) {
  const { setType } = props;
  const listMenu = DataMenuHistory.listMenu;
  return (
    <div className="flex justify-center items-center gap-x-6 sm:gap-x-8 md:gap-x-14 lg:gap-x-[84px] my-6">
      {listMenu?.map((itemMenu, index) => (
        <div key={index} onClick={() => setType(itemMenu?.label)}>
          <ItemHistoryCom itemMenu={itemMenu} />
        </div>
      ))}
    </div>
  );
}

export default MenuHistoryCom;
