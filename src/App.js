import { Biography } from "./pages/Biography/Biography";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Characters } from "./pages/Characters";
import { AboutGame } from "./pages/AboutGame";
import { Main } from "./pages/Main";
import { Contacts } from "./pages/Contacts";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="characters" element={<Characters />} />
      <Route path="characters/:id" element={<Biography />} />
      <Route path="about-game" element={<AboutGame />} />
      <Route path="contacts" element={<Contacts />} />
    </Route>
  </Routes>
);
export default App;
