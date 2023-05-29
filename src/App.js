import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage.js";
import InfosHotelView from "./components/InfosHotelViewPage.js";

function App() {
  return (
    <PagesContainer>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/hotels/view/:id" element={<InfosHotelView/>} />
      </Routes>
    </BrowserRouter>
  </PagesContainer>
  );
}
const PagesContainer = styled.main`
  background-color: lightblue;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`
export default App;
