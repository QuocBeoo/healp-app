import BodyRecordCom from "./bodyRecord";
import MyDiaryCom from "./myDiary";
import MyExerciseCom from "./myExercise";
import NavRecordCom from "./navRecord";

function RecordPageCom() {
  return (
    <div className="max-w-[960px] m-4 sm:my-8 lg:my-14 lg:mx-auto items-center">
      <NavRecordCom />
      <BodyRecordCom />
      <MyExerciseCom />
      <MyDiaryCom />
    </div>
  );
}
export default RecordPageCom;
