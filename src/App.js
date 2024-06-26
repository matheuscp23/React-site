import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Paginas/HomePage";
import AboutMe from "./Paginas/AboutMe";
import PagErro from "./Paginas/Pagina404";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import LayoutPadrao from "./componentes/LayoutPadrao";
import Post from "./Paginas/Post";
import ScrollToTop from "./componentes/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<LayoutPadrao />}>
          <Route index element={<HomePage />} />
          <Route path="sobremim" element={<AboutMe />} />
        </Route>
        <Route path="post/:id" element={<Post />} />
        <Route path="*" element={<PagErro />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
