"use client";

import { useState } from "react";
import Dado from "./Dado";

export default function JogoDados() {

    const [rodada, setRodada] = useState(1);

    const [dadosJogador1, setDadosJogador1] = useState([1, 1]);

    const [dadosJogador2, setDadosJogador2] = useState([1, 1]);

    const [vez, setVez] = useState(1);

    const [resultado, setResultado] = useState("");

    const [vitorias1, setVitorias1] = useState(0);

    const [vitorias2, setVitorias2] = useState(0);

    const [jogoFinalizado, setJogoFinalizado] = useState(false);


    function sortearDado() {
        return Math.floor(Math.random() * 6) + 1;
    }


    function jogarJogador1() {

        const dado1 = sortearDado();
        const dado2 = sortearDado();

        setDadosJogador1([dado1, dado2]);

        setVez(2);
    }


    function jogarJogador2() {

        const dado1 = sortearDado();
        const dado2 = sortearDado();

        setDadosJogador2([dado1, dado2]);

        const soma1 =
            dadosJogador1[0] + dadosJogador1[1];

        const soma2 =
            dado1 + dado2;


        if (soma1 > soma2) {

            setResultado("Jogador 1 venceu");
            setVitorias1(vitorias1 + 1);

        } else if (soma2 > soma1) {

            setResultado("Jogador 2 venceu");
            setVitorias2(vitorias2 + 1);

        } else {

            setResultado("Empate");
        }


        if (rodada === 5) {

            setJogoFinalizado(true);

        } else {

            setRodada(rodada + 1);
            setVez(1);
        }
    }


    function jogarNovamente() {

        setRodada(1);

        setDadosJogador1([1, 1]);

        setDadosJogador2([1, 1]);

        setVez(1);

        setResultado("");

        setVitorias1(0);

        setVitorias2(0);

        setJogoFinalizado(false);
    }


    return (

        <main className="jogo">

            <h1>Jogo de Dados</h1>

            <p className="rodada">
                Rodada {rodada}/5
            </p>


            <section className="jogadores">

                <div className="jogador">

                    <h2>Jogador 1</h2>

                    <div className="dados">

                        <Dado
                            valor={dadosJogador1[0]}
                            jogador={1}
                        />

                        <Dado
                            valor={dadosJogador1[1]}
                            jogador={1}
                        />

                    </div>

                    <button
                        onClick={jogarJogador1}
                        disabled={vez !== 1 || jogoFinalizado}
                    >
                        Jogar
                    </button>

                </div>


                <div className="jogador">

                    <h2>Jogador 2</h2>

                    <div className="dados">

                        <Dado
                            valor={dadosJogador2[0]}
                            jogador={2}
                        />

                        <Dado
                            valor={dadosJogador2[1]}
                            jogador={2}
                        />

                    </div>

                    <button
                        onClick={jogarJogador2}
                        disabled={vez !== 2 || jogoFinalizado}
                    >
                        Jogar
                    </button>

                </div>

            </section>


            <div className="resultado">

                <h2>Resultado</h2>

                <p>{resultado}</p>

            </div>


            {jogoFinalizado && (

                <div className="resultado-final">

                    <h2>Fim de jogo!</h2>

                    {vitorias1 > vitorias2 && (
                        <p>Jogador 1 venceu a partida!</p>
                    )}

                    {vitorias2 > vitorias1 && (
                        <p>Jogador 2 venceu a partida!</p>
                    )}

                    {vitorias1 === vitorias2 && (
                        <p>Empate geral!</p>
                    )}

                    <p>
                        Jogador 1: {vitorias1} vitória(s)
                    </p>

                    <p>
                        Jogador 2: {vitorias2} vitória(s)
                    </p>

                    <button onClick={jogarNovamente}>
                        Jogar Novamente
                    </button>

                </div>

            )}

        </main>
    );
}