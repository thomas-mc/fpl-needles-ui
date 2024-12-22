import React from 'react';
import GaugeComponent from 'react-gauge-component';
import { useNavigate } from 'react-router-dom';

const Needles = () => {
    const navigate = useNavigate();
    return (
        <>
            <GaugeComponent />
            <button onClick={() => navigate("/")}>
          TO THE HOME
        </button>
        </>
    )
}

export default Needles;