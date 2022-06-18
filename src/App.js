import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Lists from './pages/list/Lists';
import Single from './pages/single/Single';
import New from './pages/new/New';
import "./style/dark.scss"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContex } from "./context/darkModeContext";

function App() {
  const {darkMode} = useContext(DarkModeContex);
  return (
    <div className={darkMode? "app dark" :"app"}>
       <BrowserRouter>
        <Routes>
          <Route path='/' >
            <Route index element={<Home/>}/>\
            <Route path='/login' element={<Login/>}/>
            <Route path="users">
              <Route index element={<Lists/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
            </Route>
            <Route path="products">
              <Route index element={<Lists/>}/>
              <Route path=":productId" element={<Single/>}/>
              <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
