import React from 'react';
import ContactForm from './ContactForm';
import InfoSection from './InfoSection';
import AboutUs from './AboutUs';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './images/logo-01.png';


function App() {
    return (
            <div className="App">
            <main>
                <Navbar.Brand href="#home">
                    <img
                    className='logo' 
                    alt='' 
                    src={Logo}
                    />
                </Navbar.Brand>
                <InfoSection />
                <AboutUs />
                <ContactForm />
            </main>
            <footer>
                <p>&copy; 2024 Breeze Mobile Detailing USA. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;