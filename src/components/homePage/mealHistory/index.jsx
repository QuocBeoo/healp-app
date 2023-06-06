import { useState } from "react";
import HistoryCom from "./history";
import MenuHistoryCom from "./menuHistory";

function MealHistory() {
  const [type, setType] = useState(null);
  return (
    <div className="max-w-[960px] m-auto">
      <MenuHistoryCom setType={setType} />
      <HistoryCom type={type} />
    </div>
  );
}

export default MealHistory;
