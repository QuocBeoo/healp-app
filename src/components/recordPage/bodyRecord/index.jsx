import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";
import { UtilsConst } from "@/lib/definitions/UtilsConst";
import { formatZero } from "@/lib/helper/Utils";
import { useEffect, useState } from "react";
import DataBodyRecord from "@/lib/data/dataBodyRecord";
import ItemFilterRecordCom from "./itemFilterRecordCom";

const { day, month, week, year } = UtilsConst.bodyRecord;

const listFilter = [
  {
    type: day,
    label: "日",
  },
  {
    type: week,
    label: "週",
  },
  {
    type: month,
    label: "月",
  },
  {
    type: year,
    label: "年",
  },
];

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
    color: UtilsConst.variableCSS["dark-500"],
  },
};

function BodyRecordCom() {
  const [listRecord, setListRecord] = useState(null);
  const [type, setType] = useState(year);

  Chart.register(LinearScale, LineElement, CategoryScale, PointElement);

  const fetchData = (types) => {
    const data = DataBodyRecord(types);
    setListRecord(data);
  };

  const changeType = (type) => {
    setType(type);
    fetchData(type);
  };

  useEffect(() => {
    fetchData(type);
  }, []);

  if (!listRecord) {
    return;
  }

  return (
    <div
      className="flex justify-start flex-col py-4 px-6 bg-dark-500 my-14 scroll-mt-3"
      id={UtilsConst.idBoxRecord.bodyRecord}
    >
      <div className="flex text-light uppercase">
        <div className="text-[15px] font-inter w-[96px]">BODY RECORD</div>
        <div className="text-[22px] font-inter">
          {`${new Date(listRecord?.date).getFullYear()}.${formatZero(
            new Date(listRecord?.date).getMonth() + 1
          )}.${formatZero(new Date(listRecord?.date).getDate())}`}
        </div>
      </div>
      <div className="h-[250px] sm:h-[350px] w-full text-xs flex items-center justify-center my-2">
        <Line plugin={[plugin]} options={options} data={listRecord?.data} />
      </div>
      <div className="flex gap-4">
        {listFilter?.map((itemFilter, index) => (
          <div key={index}>
            <ItemFilterRecordCom
              typeActive={type}
              itemFilter={itemFilter}
              changeType={changeType}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default BodyRecordCom;
