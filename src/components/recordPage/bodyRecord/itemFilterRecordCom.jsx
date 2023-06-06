import clsx from "clsx";

function ItemFilterRecordCom(props) {
  const { typeActive, itemFilter, changeType } = props;
  return (
    <div
      onClick={() => changeType(itemFilter?.type)}
      className={clsx(
        "w-[47px] xsm:w-[56px] flex justify-center items-center h-[24px] rounded-xl cursor-pointer font-light",
        typeActive === itemFilter?.type
          ? "bg-primary-300 text-light"
          : "bg-light text-primary-300"
      )}
    >
      {itemFilter?.label}
    </div>
  );
}
export default ItemFilterRecordCom;
