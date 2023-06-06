import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";
import { UtilsConst } from "@/lib/definitions/UtilsConst";
import { DataGrap } from "@/lib/data/dataGrap";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      display: false,
    },
    x: {
      ticks: {
        display: true,
        color: "white",
        font: {
          size: 12,
        },
      },
      grid: {
        display: true,
        color: "white",
        borderWidth: 1,
      },
    },
  },
  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    },
  },
  interaction: {
    intersect: true,
  },
};

const plugin = {
  id: "custom_canvas_line",
  beforeDraw: (chart, args, options) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = options.color;
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
  defaults: {
    color: UtilsConst.variableCSS["dark-600"],
  },
};

const GraphCom = () => {
  Chart.register(LinearScale, LineElement, CategoryScale, PointElement);

  const data = DataGrap.listGrap;

  return (
    <div className="flex-1">
      <div className="h-[150px] sm:h-[312px] min-w-[55%] xl:min-w-[740px] bg-dark-600 text-xs flex items-center justify-center">
        <Line
          className="py-4 px-14"
          plugin={[plugin]}
          options={options}
          data={data}
        />
      </div>
    </div>
  );
};

export default GraphCom;
