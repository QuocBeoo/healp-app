function ItemMyExercise(props) {
  const { itemExercise } = props;
  return (
    <>
      <div className="text-[5px] text-light leading-[4]">●</div>
      <div className="text-[15px]">
        <div className="text-light font-light">{itemExercise?.content}</div>
        <div className="text-primary-300 font-inter">{`${itemExercise?.kcal}kcal`}</div>
      </div>
      <div className="text-primary-300 text-lg ml-auto font-inter">{`${itemExercise?.minutes}min`}</div>
    </>
  );
}
export default ItemMyExercise;
