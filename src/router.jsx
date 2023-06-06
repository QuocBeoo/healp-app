import { createBrowserRouter } from "react-router-dom";
import { UtilsConst } from "./lib/definitions/UtilsConst";
import LayoutDefault from "./layout/layoutDefault";
import HomePage from "./pages/homePage";
import RecordPage from "./pages/recordPage";
import ColumnPage from "./pages/columnPage";

export const router = createBrowserRouter([
  {
    path: UtilsConst?.page.homePage.url,
    element: <LayoutDefault />,
    children: [
      { index: true, element: <HomePage /> },
      { path: UtilsConst?.page.recordPage.url, element: <RecordPage /> },
      { path: UtilsConst?.page.columPage.url, element: <ColumnPage /> },
    ],
  },
]);
