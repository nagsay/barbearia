import React from 'react';
import '../style/home.css';

const Home = () => {
    return (
        <section className="home-section" id="home">
            <div className="home-content">
                <h1>Bem-vindo à Barbearia JJ</h1>
                <p>
                    Cuidando do seu estilo com tradição e modernidade.
                </p>
                <a href="#servicos" className="btn-agendar">Agende seu horário</a>
            </div>
        </section>
    );
};

export default Home;
