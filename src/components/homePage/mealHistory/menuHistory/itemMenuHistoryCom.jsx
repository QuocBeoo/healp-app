function ItemMenuHistoryCom(props) {
  const { itemMenu } = props;
  const { icon, label } = itemMenu;
  return (
    <div className="clip-path-menu w-[55px] h-[55px] select-none sm:w-[134px] sm:h-[134px] text-[10px] sm:text-[20px] bg-linear-primary hover:brightness-105 cursor-pointer text-light flex flex-col justify-center items-center">
      <span className="hidden sm:block">{icon}</span>
      <span className="font-inter">{label}</span>
    </div>
  );
}

export default ItemMenuHistoryCom;
