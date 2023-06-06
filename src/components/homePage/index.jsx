import MealHistory from "@/components/homePage/mealHistory";
import StatisticalCom from "@/components/homePage/statistical";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function HomePageCom() {
  return (
    <>
      <StatisticalCom />
      <LazyLoadComponent>
        <MealHistory />
      </LazyLoadComponent>
    </>
  );
}
export default HomePageCom;
