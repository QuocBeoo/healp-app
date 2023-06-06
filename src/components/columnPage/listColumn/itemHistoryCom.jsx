import { LazyLoadImage } from "react-lazy-load-image-component";
import { formatZero } from "@/lib/helper/Utils";

function ItemHistoryCom(props) {
  const { itemHistory } = props;

  const date = itemHistory?.date;

  return (
    <>
      <div className="relative w-full h-[100px] lg:w-[234px] lg:h-[144px] mx-auto col-span-1 my-4">
        <LazyLoadImage
          src={itemHistory?.img}
          alt={itemHistory?.img}
          className="object-cover w-full h-full select-none 1"
        />
        <div className="absolute left-0 bottom-0 min-w-[50%] h-[32px] flex items-center bg-primary-300 px-2 py-1 text-light font-inter text-[12px] sm:text-[15px]">
          <span>
            {`${new Date(date).getFullYear()}.${formatZero(
              new Date(date).getMonth() + 1
            )}.${formatZero(new Date(date).getDate())}`}
          </span>
          <span className="ml-2">
            {`${formatZero(new Date(date).getHours())}:${formatZero(
              new Date(date).getMinutes()
            )}`}
          </span>
        </div>
      </div>
      <div className="line-clamp-2 text-dark-500 text-[15px] font-light">
        {itemHistory?.content}
      </div>
      <div className="line-clamp-1 text-primary-400 text-[12px] font-light">
        {itemHistory?.listTag?.map((itemTag, indexTag) => (
          <span key={indexTag} className="mr-1">
            {`#${itemTag}`}{" "}
          </span>
        ))}
      </div>
    </>
  );
}

export default ItemHistoryCom;
