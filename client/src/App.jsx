import { Inicio, Servicios, Portafolio, Blog, Contacto, Whatsbot} from "@/pages";
import { Layout } from "@/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { INICIO, SERVICIOS, PORTAFOLIO, BLOG, CONTACTO, WHATSBOT } from "@/routes/paths";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={INICIO} element={<Inicio />} />
          <Route path={`${INICIO}/inicio`} element={<Inicio />} />
          <Route path={SERVICIOS} element={<Servicios />} />
          <Route path={PORTAFOLIO} element={<Portafolio />} />
          <Route path={BLOG} element={<Blog />} />
          <Route path={CONTACTO} element={<Contacto />} />
          <Route path={WHATSBOT} element={<Whatsbot />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
