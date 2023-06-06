import { DataRecommoned } from "@/lib/data/dataRecommoned";
import ItemRecommendedCom from "./itemRecommendedCom";

function RecommendedCom() {
  const listRecommoned = DataRecommoned.listRecommoned;
  return (
    <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 mb-8 lg:mb-14">
      {listRecommoned?.map((itemRecommoned, index) => (
        <div key={index}>
          <ItemRecommendedCom itemRecommoned={itemRecommoned} />
        </div>
      ))}
    </div>
  );
}
export default RecommendedCom;
