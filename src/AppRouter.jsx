import AllPhotos from "Pages/AllPhotos";
import Dashboard from "Pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Path from "Utils/Routes";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={Path.Dashboard} exact element={<Dashboard />} />
        <Route path={Path.AllPhotos} exact element={<AllPhotos />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
