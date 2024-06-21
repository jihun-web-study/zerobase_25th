import "./App.css";
import { BrowserRouter } from "react-router-dom";
import CustomRouter from "./router/CustomRouter";
import UserStore from "store/user";

function App() {
  return (
    <UserStore>
      <div className="App">
        <BrowserRouter>
          <CustomRouter />
        </BrowserRouter>
      </div>
    </UserStore>
  );
}

export default App;
