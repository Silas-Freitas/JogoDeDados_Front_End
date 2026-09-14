export default function Dado({ valor, jogador }) {

    const cor = jogador === 1 ? "branco" : "preto";

    const imagem = `/dados/dado-${cor}-${valor}.png`;

    return (
        <img
            src={imagem}
            alt={`Dado com valor ${valor}`}
            className="dado"
        />
    );
}