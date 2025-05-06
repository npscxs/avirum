import React from "react";
import Header from "./components/header/Header";
import Title from "./components/title/Title";
import Services from "./components/services/Services";
import { Route, Routes } from "react-router";
import Bankruptcy from "./pages/bankruptcy/Bankruptcy";
import Practics from "./components/practics/Practics";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Title />
              <Services />
              {/* <Practics /> */}
            </>
          }
        />

        <Route
          path="/bankruptcy"
          element={
            <>
              <Bankruptcy />
            </>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
