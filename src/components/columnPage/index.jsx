import ListColumnCom from "./listColumn";
import RecommendedCom from "./recommended";

function ColumnPageCom() {
  return (
    <div className="max-w-[960px] m-4 sm:my-8 lg:my-14 lg:mx-auto items-center">
      <RecommendedCom />
      <ListColumnCom />
    </div>
  );
}

export default ColumnPageCom;
