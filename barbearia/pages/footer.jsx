import React from 'react';
import '../style/footer.css';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Sweet Club. Todos os direitos reservados.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="hover:text-pink-300">Sobre</a>
                    <a href="#" className="hover:text-pink-300">Contato</a>
                    <a href="#" className="hover:text-pink-300">Política de Privacidade</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
