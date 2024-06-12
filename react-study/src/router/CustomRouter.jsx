import { Routes, Route } from "react-router-dom";
import RootLayout from "common/components/layout/RootLayout";
import A from "pages/A/A";
import B from "pages/B/B";
import C from "pages/C/C";
import Lottery from "pages/lottery/Lottery";
import MainPage from "pages/MainPage";
import ReducerPage from "pages/reducer/ReducerPage";

const CustomRouter = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/a" element={<A />}></Route>
        <Route path="/b" element={<B />}></Route>
        <Route path="/c" element={<C />}></Route>
        <Route path="/lottery" element={<Lottery />}></Route>
        <Route path="/reducer" element={<ReducerPage />}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Route>
    </Routes>
  );
};

export default CustomRouter;
