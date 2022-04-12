import React from 'react';

import logo from '../images/logo_2.png';
import ibere from '../images/ibere.png';


export default class esquerda extends React.Component {
    render() {
        return (

            <div className="esquerda">
            <div className="esquerda-conteudo">
           
                <a href="/"><img src={logo} className="logo_esquerda" /></a>

                <button><i class="fa fa-home" aria-hidden="true"></i>Página Inicial</button>
                <button><i class="fa fa-hashtag" aria-hidden="true"></i>Explorar</button>
                <button><i class="fa fa-bell" aria-hidden="true"></i>Notificações</button>
                <button><i class="fa fa-envelope" aria-hidden="true"></i>Mensagens</button>
                <button><i class="fa fa-bookmark" aria-hidden="true"></i>Itens salvos</button>
                <button><i class="fa fa-list" aria-hidden="true"></i>Listas</button>
                <button><i class="fa fa-user" aria-hidden="true"></i>Perfil</button>
                <button><i class="fa fa-ellipsis-v" aria-hidden="true"></i>Mais</button>

                <button type="button" className="button_tweetar">Tweetar</button>

                <button className="button_user">
                    <img src={ibere} />
                    <p>Iberê Thenório<br /> <span>@iberethenorio</span></p>
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        )

    }
}