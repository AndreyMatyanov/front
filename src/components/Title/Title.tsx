import React from 'react';
import logo from './logo.png'
import background from './hospital.jpg'

const Title = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 5, backgroundRepeat: "no-repeat", backgroundImage: `url("${background}")`, backgroundSize: "100%"  }}>
            <a href="/" style={{ display: "flex", alignItems: "center", flexDirection: "column", textDecoration: "none"}}>
                <img src={logo} alt="Logo" style={{ width: 200, height: 200 }} />
                <p style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, textDecoration: "none", color: "black" }}>Владивостокский Центральный Онкодиспансер</p>
            </a>
        </div>
    );
};

export default Title;