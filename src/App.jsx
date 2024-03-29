import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import MainPage from "./pages/Main/MainPage";
import Gallery from "./pages/Gallery/Gallery";
import Projects from "./pages/Projects/Projects";
import Certifications from "./pages/Certification/Certifications";
import Contact from "./pages/Contacts/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<MainPage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
