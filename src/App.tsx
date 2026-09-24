import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ArticlesPage from "./pages/ArticlesPage";
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        setMode((current) => (current === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL || '/'}>
            <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/articles" element={<ArticlesPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;