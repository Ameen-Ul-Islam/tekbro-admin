// react router
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   BrowserRouter
// } from "react-router-dom";

//imports
import './App.css';
import Signin from './Components/Signin/Signin';
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
    {/* <BrowserRouter>
    <Routes>
      <Route path='/Home' element={Dashboard} />
      <Route path='/Signin' component={Signin} />
      </Routes>
    </BrowserRouter> */}
    <Dashboard />
    </div>
  );
}

export default App;
