import AchievementCom from "./achievementCom";
import GraphCom from "./graphCom";

function StatisticalCom() {
  return (
    <div className="block sm:flex mx-auto max-w-statistical">
      <AchievementCom />
      <GraphCom />
    </div>
  );
}
export default StatisticalCom;
