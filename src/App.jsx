import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./i18n";
import "./css/App.css"
import Promo from "./components/promo";
import Menu from "./components/menu";
import SidePanel from "./components/sidepanel";
import AboutMe from "./components/about-me";
import PageUp from "./atoms/page-up";
import PageBack from "./atoms/page-back";
import MyExperience from "./components/my-experience";
import Skills from "./components/skills";
import Works from "./components/works";
import Page404 from "./components/404";
import Social from "./components/social";
import Contacts from "./components/contacts";

function App() {
  const [hamburgerState, sethamburgerState] = useState(false);
  const [pageUpState, setpageUpState] = useState(false);
  const [colorChangeState, setcolorChangeState] = useState(false);

  const onClickHamburger = () => {
    sethamburgerState(!hamburgerState);
  };

  const onClickCloseMenu = () => {
    sethamburgerState(!hamburgerState);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 350) {
        setpageUpState(true);
        setcolorChangeState(true);
      } else {
        setpageUpState(false);
        setcolorChangeState(false);
      }
    });
  }, [pageUpState]);

  const onClickUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageUp pageUpState={pageUpState} onClickUp={onClickUp} />
              <Promo onClickHamburger={onClickHamburger} />
              <Menu
                hamburger={hamburgerState}
                onClickCloseMenu={onClickCloseMenu}
                social={<Social />}
              />
              <SidePanel colorChangeState={colorChangeState} />
              <AboutMe />
              <MyExperience />
              <Skills />
              <Works />
              <Contacts/>
            </>
          }
        />
        <Route
          path="/about-me"
          element={
            <>
              <AboutMe /> <PageBack />
            </>
          }
        />
        <Route
          path="/my-experience"
          element={
            <>
              <MyExperience /> <PageBack />
            </>
          }
        />
        <Route
          path="/skills"
          element={
            <>
              <Skills /> <PageBack />
            </>
          }
        />
        <Route
          path="/works"
          element={
            <>
              <Works /> <PageBack />
            </>
          }
        />
        <Route
          path="/contacts"
          element={
            <>
              <Contacts /> <PageBack />
            </>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
