import React from 'react';
import './_app.js';

import painel from '../images/image_login.png';
import logo from '../images/logo.png';

export default class login extends React.Component {
    render() {
        return (

            <div className="login">
                <img src={painel} className="painel"></img>
                <img src={logo} className="logo"></img>

                <div className="container">

                    <h1>Acontecendo agora</h1>
                    <p>Inscreva-se no Twitter hoje mesmo.</p>
                    <div className="container_button">
                        <button type="button" className="button" >Inscrever-se</button>
                        <br/>
                        <a href="/feed"><button type="button" className="button" id="button_2">Entrar</button></a>
                    </div>
                </div>
                <footer>
                    <p>
                        Sobre
                        CentraldeAjuda
                        TermosdeServiço
                        PolíticadePrivacidade
                        Políticadecookies
                        Informaçõesdeanúncios
                        Blog
                        Status
                        Carreiras
                        Recursosdamarca
                        Publicidade
                        Marketing
                        TwitterparaEmpresas
                        Desenvolvedores
                        Diretório
                        Configurações
                    ©2021Twitter,Inc.</p>
                </footer>
            </div>
        );
    }
}