import React, { useEffect, useState } from "react";

import './css/App.min.css'

import Promo from './components/promo';
import Menu from './components/menu'
import SidePanel from './components/sidepanel'
import AboutMe from './components/about-me'
import PageUp from './components/page-up'
import MyExperience from './components/my-experience'
import data from './skills.json'

function App() {
    console.log(data.skills[1])

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
        // <div className="App">
        //   <header className="App-header">
        //     {/* <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a> */}

        //   </header>
        // </div>
        <>
        <PageUp pageUpState={pageUpState} onClickUp={onClickUp}/>
        <Promo onClickHamburger={onClickHamburger}/>
        <Menu hamburger={hamburgerState} onClickCloseMenu={onClickCloseMenu}/>
        <SidePanel colorChangeState={colorChangeState}/>
        <AboutMe/>
        <MyExperience/>
        </>
        
    );
}

export default App;
