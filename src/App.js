import { Routes, Route } from "react-router-dom";

import Navbar from "./routes/navbar/navbar.component";

import Home from "./routes/home/home.component";

function App() {
  const videos = [
    {
      id: 744082385,
      name: "Lumiere",
      role: "Full Production",
      key: 1,
    },
    {
      id: 696325791,
      name: "Batman",
      role: "Full Production",
      key: 2,
    },
    {
      id: 606285014,
      name: "Ode to my GrandMothers",
      role: "Full Production",
      key: 3,
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home videos={videos} />} />
      </Route>
    </Routes>
  );
}

export default App;
