import { LazyLoadImage } from "react-lazy-load-image-component";
import { formatZero } from "@/lib/helper/Utils";

function ItemHistoryCom(props) {
  const { itemHistory } = props;

  const name = `${formatZero(
    new Date(itemHistory?.date).getMonth() + 1
  )}.${formatZero(new Date(itemHistory?.date).getDate())}.${itemHistory?.type}`;

  return (
    <>
      <LazyLoadImage
        className="object-cover w-full h-full select-none"
        src={itemHistory?.img}
        alt={name}
        effect="blur"
      />
      <div className="absolute left-0 bottom-0 min-w-[50%] h-[32px] flex items-center bg-primary-300 px-2 py-1 text-light font-inter text-[12px] sm:text-[15px]">
        {name}
      </div>
    </>
  );
}

export default ItemHistoryCom;
