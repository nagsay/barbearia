import React from 'react';
import '../style/header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Barbearia Los Santos </div>
            <nav className="nav">
                <a href="#home" className="nav-link">Início</a>
                <a href="#servicos" className="nav-link">Serviços</a>
                <a href="#contato" className="nav-link">Contato</a>
            </nav>
        </header>
    );
};

export default Header;
