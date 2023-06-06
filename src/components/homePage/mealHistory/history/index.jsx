import { useEffect, useState } from "react";
import { DataMealHistory } from "@/lib/data/dataMealHistory";
import { UtilsConst } from "@/lib/definitions/UtilsConst";
import ItemHistoryCom from "./itemHistoryCom";
import ButtonShowMore from "@/components/common/buttonShowMore";

function HistoryCom(props) {
  const { type } = props;
  let listMealHistory = DataMealHistory.listMealHistory;
  const limitHistory = UtilsConst.limitHistory;
  const [limit, setLimit] = useState(limitHistory);

  if (type) {
    listMealHistory = listMealHistory?.filter((_) => _?.type === type);
  }

  const showMore = () => {
    setLimit(limit + limitHistory);
  };

  useEffect(() => {
    setLimit(limitHistory);
  }, [type]);

  return (
    <>
      <div className="grid gap-2 mb-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {listMealHistory?.slice(0, limit)?.map((itemHistory, index) => (
          <div
            key={index}
            className="relative w-[130px] h-[130px] sm:w-[180px] sm:h-[180px] lg:w-[234px] lg:h-[234px] mx-auto col-span-1"
          >
            <ItemHistoryCom itemHistory={itemHistory} />
          </div>
        ))}
      </div>
      <ButtonShowMore
        limit={limit}
        length={listMealHistory?.length}
        showMore={showMore}
        label="記録をもっと見る"
      />
    </>
  );
}

export default HistoryCom;
