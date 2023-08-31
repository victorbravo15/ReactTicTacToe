import { TURNS } from "../constants.ts";
import { Square } from "./Square.tsx";

export function Turn({ turn }) {
    return <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
}