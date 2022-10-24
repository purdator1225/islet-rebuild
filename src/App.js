import { Routes, Route } from "react-router-dom";

import Navbar from "./routes/navbar/navbar.component";

import Home from "./routes/home/home.component";

import ContactUS from "./routes/contact-us/contact-us";

import AboutUS from "./routes/about-us/about-us";

import CaseStudies from "./routes/case-studies/case-studies.component";

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
        <Route path='/about-us' element={<AboutUS/>}/>
        <Route path='/contact-us' element={<ContactUS/>}/>
        <Route path='/case-studies' element={<CaseStudies/>}/>
      </Route>
    </Routes>
  );
}

export default App;
