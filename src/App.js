import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage.js";

function App() {
  return (
    <PagesContainer>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<HomePage/>} />
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
