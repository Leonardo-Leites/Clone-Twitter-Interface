import React from 'react';

import jesus from '../images/jesus.png';
import papaiNoel from '../images/papaiNoel.jpg';

import Scroll from './scroll.js';

export default class direita extends React.Component {
    render() {
        return (
            <div className="scroll">
                <div className="barra-pesquisa">
                    <i class="fa fa-search" aria-hidden="true"></i><input type="text" placeholder="Buscar no Twitter"></input>
                </div>

                <div className="acontecendo">
                    <p id="primeira">O que está acontecendo</p><hr />
                    <div>
                        <div className="texto">
                            <p><span>Futebol . AO VIVO</span><br />
                                Deus voltou e vai jogar no vasco
                            <br /><span>#vaiDeus</span></p>
                        </div>
                        <img src={jesus} />
                    </div>
                    <hr />
                    <div>
                        <div className="texto">
                            <p><span>Entretenimento . Assunto do Momento</span><br />
                            Ninguém acredita no que viu, alien volta no tempo e abraça papai noel
                            <br /><span>295,9 mil Tweets</span></p>
                        </div>
                        <img src={papaiNoel} />
                    </div>
                    <hr />
                    <div>
                        <div className="texto">
                            <p><span>Gaming . Assunto do Momento</span><br />
                            LOL sai do beta: entenda.
                            <br /><span>Assuntos do Momento: <span>#Amém</span></span></p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className="texto">
                            <p><span>Política . Assunto do Momento</span><br />
                            #EUTEAMOTIRIRICA
                            <br /><span>Assuntos do Momento: <span>Tiririca</span></span></p>
                        </div>
                    </div>
                    <hr />
                    <div id="mostrar"><p >Mostrar Mais</p></div>

                </div>

                <div className="quemSeguir">
                    <p id="primeira">Quem Seguir</p><hr />
                    <div>
                        <img src={papaiNoel} />
                        <div className="texto">
                            <p><span>lucasInutencílios</span><br />
                                @luquitas
                            <br /></p>
                        </div>
                        <button>Seguir</button>
                    </div>
                    <hr />
                    <div>
                        <img src={papaiNoel} />
                        <div className="texto">
                            <p><span>lucasInutencílios</span><br />
                                @luquitas
                            <br /></p>
                        </div>
                        <button>Seguir</button>
                    </div>
                    <hr />
                    <div>
                        <img src={papaiNoel} />
                        <div className="texto">
                            <p><span>lucasInutencílios</span><br />
                                @luquitas
                            <br /></p>
                        </div>
                        <button>Seguir</button>
                    </div>
                    <hr />
                    <div id="mostrar"><p >Mostrar Mais</p></div>
                </div>
                <div className="termos">
                    <p>
                        <div>Termos de Serviço </div>
                        <div>Política de Privacidade</div>
                        <div>Política de Cookies</div>
                        <div>Informações de anúncios</div>
                        <div>Mais</div><div id="icon"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                        <div id="direitos"><span>© 2021 Twitter, Inc.</span></div>
                    </p>
                    <Scroll />
                </div>
            </div>
        );
    }
}
