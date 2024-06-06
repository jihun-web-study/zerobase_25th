import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import A from "pages/A/A";
import B from "pages/B/B";
import C from "pages/C/C";
import Lottery from "pages/lottery/Lottery";

const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/a" element={<A />}></Route>
      <Route path="/b" element={<B />}></Route>
      <Route path="/c" element={<C />}></Route>
      <Route path="/lottery" element={<Lottery />}></Route>
      <Route path="*" element={<div>default</div>}></Route>
    </Routes>
  );
};

export default CustomRouter;
