import React, { useState } from "react";

import './css/App.min.css'

import Promo from './components/promo';
import Menu from './components/menu'

function App() {
    const [hamburgerState, sethamburgerState] = useState(false)

    const onClickHamburger = () => {
        sethamburgerState(!hamburgerState)
    } 

    const onClickCloseMenu= () => {
        sethamburgerState(!hamburgerState)
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
        <Promo onClickHamburger={onClickHamburger}/>
        <Menu hamburger={hamburgerState} onClickCloseMenu={onClickCloseMenu}/>
        </>
        
    );
}

export default App;
