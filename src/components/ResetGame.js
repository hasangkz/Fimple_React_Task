import React from 'react';
import '../style/resetGame.css';

const ResetGame = ({ resetTheGame }) => {
  return (
    <button className='reset' onClick={resetTheGame}>
      TEKRAR
    </button>
  );
};
export default ResetGame;
