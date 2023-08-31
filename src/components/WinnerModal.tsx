import { Square } from "./Square";

export function WinnerModal({ winner, resetGame }) {
    if (winner === null) return null;

    return (
        <section className="winner">
            <div className="text">
                <h2>
                    {
                        winner === false
                            ? 'Empate'
                            : 'Ganó: ' + winner
                    }
                </h2>

                {
                    winner !== false && (
                        <header className="win">
                            {winner && <Square>{winner}</Square>}
                        </header>
                    )}

                <footer>
                    <button onClick={resetGame}>Reiniciar</button>
                </footer>
            </div>
        </section>)
}
