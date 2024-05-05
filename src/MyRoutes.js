import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";
import Articles from './components/Home/Articles'; 
import Doctors from './components/Home/Doctors'; 
import Hospitals from "./components/Home/Hospitals";
import Events from "./components/Home/Events";



export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route exact path="/articles" element={<Articles />} />
      <Route exact path="/doctors" element={<Doctors />} />
      <Route exact path="/hospitals" element={<Hospitals />} />
      <Route exact path="/events" element={<Events />} />
    </Routes>
  );
}
