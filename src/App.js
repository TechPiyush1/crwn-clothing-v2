import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

import { Routes,Route } from "react-router-dom";
import Authorize from "./routes/sign-in/sign-in.component";

const Shop=()=>
{
  return(
    <h1>I am a Shop Page.</h1>
  );
}



function App() {
  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="sign" element={<Authorize/>}/>
      </Route> 
    </Routes>
   
  );
}

export default App;
