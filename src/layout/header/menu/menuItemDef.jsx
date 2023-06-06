function MenuItemDef(props) {
  const { itemMenu } = props;

  return (
    <p className="text-light text-start text-lg px-8 py-[23px] hover:bg-light hover:bg-opacity-10 border-b border-t border-light border-opacity-15">
      {itemMenu?.title}
    </p>
  );
}

export default MenuItemDef;
