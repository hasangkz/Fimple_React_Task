import React from 'react';
import '../style/score.css';
const Score = ({ score, xPlaying }) => {
  const { PlayerXScore, PlayerOScore } = score;
  return (
    <div className='score'>
      <span className={`scoreItem scoreX ${!xPlaying && 'toogle'} `}>
        OYUNCU X - {PlayerXScore}
      </span>
      <span className={`scoreItem scoreO ${xPlaying && 'toogle'} `}>
        OYUNCU O - {PlayerOScore}
      </span>
    </div>
  );
};
export default Score;
