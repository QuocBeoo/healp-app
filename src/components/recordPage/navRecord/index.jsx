import { LazyLoadImage } from "react-lazy-load-image-component";
import { DataNavRecord } from "@/lib/data/dataNavRecord";

function NavRecordCom() {
  const listNavRecord = DataNavRecord.listNavRecord;

  const autoScrollBox = (box) => {
    let timer = null;
    if (box) {
      timer = setTimeout(() => {
        const elementById = document.getElementById(box);
        elementById?.scrollIntoView({
          behavior: "smooth",
        });
      }, 0);
    }
    return () => clearTimeout(timer);
  };

  return (
    <div className="flex justify-between">
      {listNavRecord?.map((itemNav, index) => (
        <div
          onClick={() => autoScrollBox(itemNav?.id)}
          key={index}
          className="w-[90px] h-[90px] xsm:w-[120px] xsm:h-[120px] sm:w-[200px] sm:h-[200px] lg:w-[288px] lg:h-[288px] border-[10px] sm:border-[24px] bg-dark-600 border-primary-300 flex flex-col justify-center items-center relative cursor-pointer hover:!bg-light hover:!bg-opacity-30"
        >
          <LazyLoadImage
            src={itemNav?.src}
            alt={itemNav?.title}
            className="h-full absolute top-0 left-0 object-cover mix-blend-luminosity opacity-25"
          />
          <div className="text-[13px] md:text-[16px] lg:text-[25px] text-primary-300 z-10 font-inter text-center">
            {itemNav?.title}
          </div>
          <div className="hidden md:block w-[160px] text-light font-light text-[14px] bg-primary-400 text-center z-20 mt-1">
            {itemNav?.subTitle}
          </div>
        </div>
      ))}
    </div>
  );
}
export default NavRecordCom;
