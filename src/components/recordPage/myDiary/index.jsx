import { useState } from "react";
import { DataMyDiary } from "@/lib/data/dataMyDiary";
import ItemMyDiaryCom from "./itemMyDiaryCom";
import ButtonShowMore from "@/components/common/buttonShowMore";
import { UtilsConst } from "@/lib/definitions/UtilsConst";

function MyDiaryCom() {
  const listMyDiary = DataMyDiary.listMyDiary;
  const limitComlumn = UtilsConst.limitDiary;
  const [limit, setLimit] = useState(limitComlumn);

  const showMore = () => {
    setLimit(limit + limitComlumn);
  };

  return (
    <div className="text-dark-500 scroll-mt-3" id={UtilsConst.idBoxRecord.myDiary}>
      <div className="text-[22px] font-inter">MY DIARY</div>
      <div className="grid gap-2 mb-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-2">
        {listMyDiary?.slice(0, limit)?.map((itemDiary, index) => (
          <div
            key={index}
            className="w-[145px] h-[145px] xsm:w-[190px] xsm:h-[190px] md:w-[231px] md:h-[231px] mx-auto border-2 border-dark-400 p-4 col-span-1"
          >
            <ItemMyDiaryCom itemDiary={itemDiary} />
          </div>
        ))}
      </div>
      <ButtonShowMore
        limit={limit}
        length={listMyDiary?.length}
        showMore={showMore}
        label="自分の日記をもっと見る"
      />
    </div>
  );
}
export default MyDiaryCom;
