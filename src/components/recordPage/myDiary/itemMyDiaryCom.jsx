import { formatZero } from "@/lib/helper/Utils";

function ItemMyDiaryCom(props) {
  const { itemDiary } = props;

  const date = itemDiary?.date;
  
  return (
    <>
      <div className="text-[14px] xsm:text-base md:text-[18px] leading-[16px] xsm:leading-[22px] mb-2 max-w-[60%] font-inter">
        <span>{`${new Date(date).getFullYear()}.${formatZero(
          new Date(date).getMonth() + 1
        )}.${formatZero(new Date(date).getDate())}`}</span>
        <span className="ml-2">
          {`${formatZero(new Date(date).getHours())}:${formatZero(
            new Date(date).getMinutes()
          )}`}
        </span>
      </div>
      <div
        className="text-xs font-light line-clamp-4 xsm:line-clamp-5 md:line-clamp-7"
        dangerouslySetInnerHTML={{
          __html: itemDiary?.content || "Loading",
        }}
      ></div>
    </>
  );
}
export default ItemMyDiaryCom;
