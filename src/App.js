import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './css/App.min.css'

import Promo from './components/promo';
import Menu from './components/menu'
import SidePanel from './components/sidepanel'
import AboutMe from './components/about-me'
import PageUp from './components/page-up'
import MyExperience from './components/my-experience'
import Skills from './components/skills'
import Works from './components/works'
import Page404 from './components/404'

function App() {


    const [hamburgerState, sethamburgerState] = useState(false)
    const [pageUpState, setpageUpState] = useState(false)
    const [colorChangeState, setcolorChangeState] = useState(false)

    const onClickHamburger = () => {
        sethamburgerState(!hamburgerState)
    } 

    const onClickCloseMenu= () => {
        sethamburgerState(!hamburgerState)
    } 


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 600) {
                setpageUpState(true);
                setcolorChangeState(true);            
            } else {
                setpageUpState(false);
                setcolorChangeState(false);
            }  
        })  
    }, [pageUpState])


    const onClickUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (

        <Router>
            <Routes>
                <Route exact path = "/"  element={
                    <React.Fragment>
                        <PageUp pageUpState={pageUpState} onClickUp={onClickUp}/>
                        <Promo onClickHamburger={onClickHamburger}/>
                        <Menu hamburger={hamburgerState} onClickCloseMenu={onClickCloseMenu}/>
                        <SidePanel colorChangeState={colorChangeState}/>
                        <AboutMe/>
                        <MyExperience/>
                        <Skills/>
                        <Works/>
                    </React.Fragment>}/> 
                <Route path = "*" element={<Page404/>}/>
            </Routes>
        </Router>
        
    );
}

export default App;
