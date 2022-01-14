import React from 'react';

import Square from './Square';

const Board = () => {
    return (
        <div className="board">
            <div className="board-row">
                <Square value={0} />
                <Square value={1} />
                <Square value={2} />
            </div>
            <div className="board-row">
                <Square value={3} />
                <Square value={4} />
                <Square value={5} />
            </div>
            <div className="board-row">
                <Square value={6} />
                <Square value={7} />
                <Square value={8} />
            </div>
        </div>
    );
};

//We create a 3x3 grid for the board. We have 3 rows and 3 squares inside each row.

export default Board;
