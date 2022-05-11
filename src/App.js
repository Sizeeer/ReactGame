import { Biography } from "./pages/Biography/Biography";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Characters } from "./pages/Characters";
import { AboutGame } from "./pages/AboutGame";
import { Main } from "./pages/Main";
import { Contacts } from "./pages/Contacts";
import { NotFound } from "./pages/NotFound";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const load = () => {
        const anchorElement = document.getElementById(hash.slice(1));
        if (anchorElement) {
          anchorElement.scrollIntoView({
            block: "center",
            behavior: "smooth",
          });
        }
      };

      window.addEventListener("load", load, { once: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="characters" element={<Characters />} />
        <Route path="characters/:id" element={<Biography />} />
        <Route path="about-game" element={<AboutGame />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default App;
