import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Screen Import
import IntroductionMainScreen from "./Screens/Introduction/IntroductionMainScreen";
import HomeMainScreen from "./Screens/Home/HomeMainScreen";

require("./assets/scss");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<IntroductionMainScreen />} />
          <Route exact path="/bonjourmonde" element={<HomeMainScreen />} />
          <Route element={<HomeMainScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
