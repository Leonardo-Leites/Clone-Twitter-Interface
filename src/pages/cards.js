import React from 'react';

import ibere from '../images/ibere.png';
import leo from '../images/leo.jpg';
import vitor from '../images/vitor.jpg';
import verify from '../images/verify.png';

export default class feed extends React.Component {
    render() {
        return (

            <>
                <div className="cards">
                            <div className="image_cards"> <img src={ibere} /></div>
                            <div className="user_cards">
                                <p>lberê Thenório <img src={verify} /><span>@iberethenorio . 1 s</span></p>
                                <button id="comment"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></button>
                            </div>
                            <div className="container_write">
                                <div className="user_write">
                                    <p>Que dia maravilhoso para colocar o submarino na água. Pena que não quero.</p>
                                </div>
                                <div className="icons">
                                    <button id="comment"><i class="fa fa-comment" aria-hidden="true"></i></button>
                                    <button id="retweet"><i class="fa fa-retweet" aria-hidden="true"></i></button>
                                    <button id="heart"><i class="fa fa-heart" aria-hidden="true"></i></button>
                                    <button id="upload"><i class="fa fa-upload" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="image_cards"> <img src={leo} /></div>
                            <div className="user_cards">
                                <p>Só Leo <span>@LeoLeites_ . 2 min</span></p>
                                <button id="comment"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></button>
                            </div>
                            <div className="container_write">
                                <div className="user_write">
                                    <p>DEUS VOLTOU E VAI JOGAR NO VASCO</p>
                                </div>
                                <div className="icons">
                                    <button id="comment"><i class="fa fa-comment" aria-hidden="true"></i></button>
                                    <button id="retweet"><i class="fa fa-retweet" aria-hidden="true"></i></button>
                                    <button id="heart"><i class="fa fa-heart" aria-hidden="true"></i></button>
                                    <button id="upload"><i class="fa fa-upload" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="image_cards"> <img src={vitor} /></div>
                            <div className="user_cards">
                                <p>Vitu <span>@invisible_vitu . 8 h</span></p>
                                <button id="comment"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></button>
                            </div>
                            <div className="container_write">
                                <div className="user_write">
                                    <p>AAAAAAAAAAAAAAAAAAAAAAA</p>
                                </div>
                                <div className="icons">
                                    <button id="comment"><i class="fa fa-comment" aria-hidden="true"></i></button>
                                    <button id="retweet"><i class="fa fa-retweet" aria-hidden="true"></i></button>
                                    <button id="heart"><i class="fa fa-heart" aria-hidden="true"></i></button>
                                    <button id="upload"><i class="fa fa-upload" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="image_cards"> <img src={vitor} /></div>
                            <div className="user_cards">
                                <p>Vitu <span>@invisible_vitu . 8 h</span></p>
                                <button id="comment"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></button>
                            </div>
                            <div className="container_write">
                                <div className="user_write">
                                    <p>ALGUÉM ME AJUDA</p>
                                </div>
                                <div className="icons">
                                    <button id="comment"><i class="fa fa-comment" aria-hidden="true"></i></button>
                                    <button id="retweet"><i class="fa fa-retweet" aria-hidden="true"></i></button>
                                    <button id="heart"><i class="fa fa-heart" aria-hidden="true"></i></button>
                                    <button id="upload"><i class="fa fa-upload" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="image_cards"> <img src={ibere} /></div>
                            <div className="user_cards">
                                <p>lberê Thenório <img src={verify} /><span>@iberethenorio .  24 de abr</span></p>
                                <button id="comment"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></button>
                            </div>
                            <div className="container_write">
                                <div className="user_write">
                                    <p>Aprenda como fazer metanfetamina com água, pasta de dente e um elefante (azul). Junte tudo no cu da sua mãe
                                        coloque um fósforo roxo com carne de boi. Depois só jogar tudo fora e comprar metanfetamina do traficante da
                                        esquina.
                                    </p>
                                </div>
                                <div className="icons">
                                    <button id="comment"><i class="fa fa-comment" aria-hidden="true"></i></button>
                                    <button id="retweet"><i class="fa fa-retweet" aria-hidden="true"></i></button>
                                    <button id="heart"><i class="fa fa-heart" aria-hidden="true"></i></button>
                                    <button id="upload"><i class="fa fa-upload" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="image_cards"> <img src={ibere} /></div>
                            <div className="user_cards">
                                <p>lberê Thenório <img src={verify} /><span>@iberethenorio .  1 séc</span></p>
                                <button id="comment"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></button>
                            </div>
                            <div className="container_write">
                                <div className="user_write">
                                    <p>choraste 
                                    </p>
                                </div>
                                <div className="icons">
                                    <button id="comment"><i class="fa fa-comment" aria-hidden="true"></i></button>
                                    <button id="retweet"><i class="fa fa-retweet" aria-hidden="true"></i></button>
                                    <button id="heart"><i class="fa fa-heart" aria-hidden="true"></i></button>
                                    <button id="upload"><i class="fa fa-upload" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>

            </>
        );
    }
}