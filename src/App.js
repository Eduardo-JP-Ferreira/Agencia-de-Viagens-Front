import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage.js";
import InfosHotelView from "./components/InfosHotelViewPage.js";
import InfosTicketView from "./components/infosTicketViewPage.js";
import { useState } from "react";

function App() {
  const [icone, setIcone] = useState("././assets/icone.jpg");

  return (
    <PagesContainer>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<HomePage icone={icone}/>} />
       <Route path="/hotels/view/:id" element={<InfosHotelView/>} />
       <Route path="/tickets/view/:id" element={<InfosTicketView
       icone={icone}
       />} />
      </Routes>
    </BrowserRouter>
  </PagesContainer>
  );
}
const PagesContainer = styled.main`
  /* background-color: lightblue; */
  width: calc(100vw - 50px);
  height: 100vH;
  padding: 25px;
`
export default App;
