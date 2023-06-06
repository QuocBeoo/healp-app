import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Legend, Tooltip } from "chart.js";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DataAchievement } from "@/lib/data/dataAchievement";

const plugin = {
  beforeDraw: (chart) => {
    const { ctx } = chart;
    ctx.shadowColor = "#FC7400";
    ctx.shadowBlur = 6;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
  },
};

function AchievementCom() {
  Chart.register(ArcElement, Tooltip, Legend);

  const { numberCurrent, numberToal, progress, datasets } =
    DataAchievement.listAchievement;

  const data = { datasets };

  return (
    <div className="h-[150px] sm:h-[312px] w-full sm:max-w-[45%] xl:max-w-[540px] flex justify-center items-center relative">
      <LazyLoadImage
        className="object-cover w-full h-full select-none"
        src="/imgs/banner/achievement.png"
        alt="achievement"
        effect="blur"
      />
      <div className="absolute w-[100px] h-[100px] sm:w-[181px] sm:h-[181px]">
        <div className="relative flex items-center justify-start">
          <Doughnut
            className="mx-auto sm:!w-full"
            data={data}
            plugins={[plugin]}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-light font-inter">
            <span className="text-[12px] sm:text-[18px] text-shadow-primary-400">
              {`${numberCurrent}/${numberToal}`}
            </span>
            <span className="text-[16px] sm:text-[25px] text-shadow-primary-500 ml-2">
              {`${progress}%`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AchievementCom;
