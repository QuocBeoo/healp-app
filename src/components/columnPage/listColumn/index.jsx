import { useState } from "react";
import { UtilsConst } from "@/lib/definitions/UtilsConst";
import ItemHistoryCom from "./itemHistoryCom";
import ButtonShowMore from "@/components/common/buttonShowMore";
import { DataComlumn } from "@/lib/data/dataComlumn";

function ListColumnCom() {
  let listMealHistory = DataComlumn.listColumn;
  const limitComlumn = UtilsConst.limitComlumn;
  const [limit, setLimit] = useState(limitComlumn);

  const showMore = () => {
    setLimit(limit + limitComlumn);
  };

  return (
    <>
      <div
        className={`grid gap-2 mb-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`}
      >
        {listMealHistory?.slice(0, limit)?.map((itemHistory, index) => (
          <div className="flex flex-col" key={index}>
            <ItemHistoryCom itemHistory={itemHistory} />
          </div>
        ))}
      </div>
      <ButtonShowMore
        limit={limit}
        length={listMealHistory?.length}
        showMore={showMore}
        label="コラムをもっと見る"
      />
    </>
  );
}

export default ListColumnCom;
