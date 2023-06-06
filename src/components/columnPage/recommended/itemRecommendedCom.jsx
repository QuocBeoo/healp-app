function ItemRecommendedCom(props) {
  const { itemRecommoned } = props;
  return (
    <>
      <div className="w-[130px] h-[100px] sm:w-[155px] sm:h-[120px] lg:w-[216px] lg:h-[144px] bg-dark-600 flex flex-col justify-center items-center col-span-1 mx-auto">
        <div className="text-[14px] uppercase sm:text-[16px] lg:text-[22px] font-inter text-center text-primary-300 font-normal">
          {itemRecommoned?.title}
        </div>
        <hr className="border-t border-light w-[56px] my-2"></hr>
        <div className="text-light font-light text-[12px] sm:text-[16px] lg:text-[18px]">
          {itemRecommoned?.subTitle}
        </div>
      </div>
    </>
  );
}

export default ItemRecommendedCom;
