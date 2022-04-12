import React from 'react';

import Login from './login.js';
import Head from 'next/head';

import logoAzul from '../images/logo_azul.png';

export default class index extends React.Component {
    render() {
        return (
            <div >

                <Head>
                    <title>Twitter</title>
                    <link rel="icon" type="image/png" href={logoAzul} />
                </Head>

                <Login />

            </div>
        );
    }
}