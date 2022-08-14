import React from 'react';
import '../style/gameBoard.css';
import Box from './Box';

const GameBoard = ({ board, onClick }) => {
  return (
    <div className='board'>
      {board.map((item, index) => {
        return (
          <Box
            key={index}
            value={item}
            handleValue={() => (item === null ? onClick(index) : null)}
          />
        );
      })}
    </div>
  );
};
export default GameBoard;
