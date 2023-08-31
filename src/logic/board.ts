import { WINNER_COMBOS } from "../constants.ts";

export const checkWinnerFor = (boardToCheck: any[]) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;

        if (boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a];
        }
    }

    return null;
}

export const checkEndGame = (newBoard: any[]) => {
    return newBoard.every((square: null) => square !== null);
}

