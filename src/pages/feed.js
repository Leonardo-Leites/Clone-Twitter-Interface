import React from 'react';
import './_app.js';
import Head from 'next/head';

import Direita from './direita.js';
import Esquerda from './esquerda.js';
import Meio from './meio.js';


import logoAzul from '../images/logo_azul.png';

export default class feed extends React.Component {
    render() {
        return (

            <div className="containerFeed">

                <Head>
                    <link rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                        crossorigin="anonymous" />
                    <title>Página Inicial / Twitter</title>
                    <link rel="icon" type="image/png" href={logoAzul} />

                </Head>

                <Esquerda />
               
                <Meio />
                <div className="direita">
                    {/* DIREITA */}
                    <Direita />

                </div>

            </div>
        );
    }
}