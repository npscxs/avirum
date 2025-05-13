import React from "react";
import Header from "./components/header/Header";
import Title from "./components/title/Title";
import Services from "./components/services/Services";
import { Route, Routes } from "react-router";
import Bankruptcy from "./pages/bankruptcy/Bankruptcy";
import SwiperWord from "./components/swiper/Swiper";
import WinBusines from "./pages/winBusines/WinBusines";
import Team from "./components/team/Team";
import FooterApp from "./components/footer/FooterApp";

function App() {
  return (
    <div>
      <Header />
      <hr />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Title />
              <Services />
              <SwiperWord />
              <Team />
              <FooterApp />
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
        <Route
          path="/winBusiness"
          element={
            <>
              <WinBusines />
            </>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
