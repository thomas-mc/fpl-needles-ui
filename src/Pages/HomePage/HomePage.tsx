import React from 'react';
import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import fplLogo from '/FPL-logo.svg'
import './HomePage.css'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    return(
        <>
      <div>
        <a href="https://fantasy.premierleague.com/leagues/47120/standings/h" target="_blank">
          <img src={fplLogo} className="logo" alt="FPL logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => navigate("/needles")}>
          TO THE NEEDLES
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the FPL logo to redirect to the Premiership of the Wings League
      </p>
    </>
    )
}

export default HomePage;