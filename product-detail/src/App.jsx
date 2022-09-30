import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from "home/Footer";
import SafeComponent from "./SafeComponent";
import ProductContent from "./ProductContent";
const Header = React.lazy(()=> import("home/Header")) ;

const App = () => (
  <Router>
  <SafeComponent>
  <div >
    <Suspense fallback={<div>Loading</div>}>
    <Header/>
    </Suspense>
    
    <div className="text-3xl mx-auto max-w-6xl my-10">
      <Routes>
        <Route path="/product/:id" element={<ProductContent/>} />
      </Routes>
    </div>
    <Footer/>
  </div>
  </SafeComponent>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
