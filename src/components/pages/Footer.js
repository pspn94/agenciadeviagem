import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../Button'
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Cadastre-se e receba ofertas para suas férias!
                </p>
                <p className="footer-subscription-text">
                    Você pode cancelar a inscrição a qualquer momento.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Seu Email"className="footer-input" />
                        <Button buttonStyle='btn--outline'>Inscreva-se</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Sobre Nós</h2>
                        <Link to="/">Quem somos?</Link>
                        <Link to="/">O que falam sobre nós?</Link>
                        <Link to="/">Nossa Carreira</Link>
                        <Link to="/">Nossos Investidores</Link>
                        <Link to="/">Termos de Serviço</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Fale Conosco</h2>
                        <Link to="/">Contato</Link>
                        <Link to="/">Suporte</Link>
                        <Link to="/">Destinos</Link>
                        <Link to="/">Patrocínio</Link>
                        
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Vídeos</h2>
                        <Link to="/">Submeter vídeos</Link>
                        <Link to="/">Embaixadores</Link>
                        <Link to="/">Agência</Link>
                        <Link to="/">Influenciadores</Link>
                   
                    </div>
                    <div className="footer-link-items">
                        <h2>Redes Sociais</h2>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/'className="social-logo">
                           MyTRIP <i className="fab fa-type3"></i>
                        </Link>
                        <div className="social-icons"></div>
                        <Link className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link youtube"
                        to="/"
                        target="_blank"
                        aria-label="Youtube"
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                        to="/"
                        target="_blank"
                        aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                        to="/"
                        target="_blank"
                        aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                    <small className="website-rights">MyTRIP © 2021</small>
                </div>
            </section>
        </div>
    )
}

export default Footer
