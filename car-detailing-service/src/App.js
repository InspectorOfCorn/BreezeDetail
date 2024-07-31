import React from 'react';
import ContactForm from './ContactForm';
import InfoSection from './InfoSection';
import AboutUs from './AboutUs';
import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <h1>Breeze Car Interior Detailing</h1>
                {/* Add navigation menu here if needed */}
            </header>
            <main>
                <InfoSection />
                <AboutUs />
                <ContactForm />
            </main>
            <footer>
                <p>&copy; 2023 Breeze Detailing USA. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;