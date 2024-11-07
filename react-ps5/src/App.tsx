import React, { useState } from "react";
import Footer from "./components/Footer";
import MainWindow from "./components/MainWindow";
import NavbarTop from "./components/Navbar";

function App() {
  const [page, setPage] = useState("home");

  const handleLinkClick = (newPage: string) => {
    setPage(newPage);
  };

  return (
    <div>
      <NavbarTop onLinkClick={handleLinkClick} />
      <MainWindow page={page} />
      <Footer />
    </div>
  );
}

export default App;
