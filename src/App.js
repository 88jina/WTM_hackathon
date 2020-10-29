import React from "react";
import { HashRouter,Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import BrandList from "./routes/BrandList";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <div className="wrap">
      <Navigation/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/brand" component={BrandList} />
      </div>
    </HashRouter> 
  );

}
export default App;