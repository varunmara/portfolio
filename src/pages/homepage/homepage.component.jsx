import React from "react";

import Navbar from "../../components/navbar/navbar.component.jsx";
import Hero from "../../components/hero/hero.component.jsx";
import WorkList from "../../components/work-list/work-list.component.jsx";
import Footer from "../../components/footer/footer.component.jsx";

const HomePage = props => {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <WorkList />
      <Footer />
    </div>
  );
};

export default HomePage;
