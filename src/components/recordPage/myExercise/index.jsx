import { DataMyExercise } from "@/lib/data/dataMyExercise";
import ItemMyExercise from "./itemMyExercise";
import { formatZero } from "@/lib/helper/Utils";
import { UtilsConst } from "@/lib/definitions/UtilsConst";

function MyExerciseCom() {
  const dataMyExercise = DataMyExercise.listMyDiary;
  const { date } = dataMyExercise;
  const listMyDiary = dataMyExercise?.data || [];
  const average = Math.ceil(listMyDiary?.length / 2);
  const tableLeft = listMyDiary?.slice(0, average);
  const tableRight = listMyDiary?.slice(average, listMyDiary?.length);
  return (
    <div
      className="flex justify-start flex-col py-4 px-6 bg-dark-500 my-14 scroll-mt-3"
      id={UtilsConst.idBoxRecord.myExercise}
    >
      <div className="flex text-light uppercase">
        <div className="text-[15px] font-inter w-[96px]">MY EXERCISE</div>
        <div className="text-[22px] font-inter">{`${new Date(
          date
        ).getFullYear()}.${formatZero(
          new Date(date).getMonth() + 1
        )}.${formatZero(new Date(date).getDate())}`}</div>
      </div>
      <div className="flex items-start gap-10 mt-2 overflow-y-auto scroll-custom-primary">
        <div className="flex-grow h-[196px] basis-[40%] pr-2">
          {tableLeft?.map((itemExercise, index) => (
            <div
              key={index}
              className="flex border-b border-gray-400 gap-2 pr-3 py-1"
            >
              <ItemMyExercise itemExercise={itemExercise} />
            </div>
          ))}
        </div>
        <div className="flex-grow h-[196px] basis-[40%] pr-2">
          {tableRight?.map((itemExercise, index) => (
            <div
              key={index}
              className="flex border-b border-gray-400 gap-2 pr-3 py-1"
            >
              <ItemMyExercise itemExercise={itemExercise} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default MyExerciseCom;
