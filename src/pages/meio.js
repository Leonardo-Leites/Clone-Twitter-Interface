import React from 'react';

import ibere from '../images/ibere.png';
import Cards from './cards.js';

export default class esquerda extends React.Component {
    render() {
        return (
            <>
                <div className="meio">
                    <div className="topo">
                        <p>Página Inicial</p>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div className="meio-conteudo">
                        <div className="feed">
                            <img src={ibere} />
                            <div className="text">
                                <textarea placeholder="O que está acontencendo?" ></textarea>
                                <button><i class="fa fa-globe" aria-hidden="true"></i>Qualquer pessoa pode responder</button>
                            </div>
                            <hr />
                            <div className="icons-tweetar">
                                <button id="i_one"><i class="fa fa-picture-o" aria-hidden="true"></i></button>
                                <button><i class="fa fa-github-square" aria-hidden="true"></i></button>
                                <button><i class="fa fa-tasks" aria-hidden="true"></i></button>
                                <button><i class="fa fa-smile-o" aria-hidden="true"></i></button>
                                <button><i class="fa fa-calendar-minus-o" aria-hidden="true"></i></button>
                                <button type="button" id="btn-tweetar">Tweetar</button>
                            </div>
                        </div>
                        {/* CARDS */}
                        <Cards />
                        {/* CARDS */}

                    </div>
                </div>
            </>
        )

    }
}

