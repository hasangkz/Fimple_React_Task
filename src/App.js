import './style/App.css';
import GameBoard from './components/GameBoard';
import ResetGame from './components/ResetGame';
import Score from './components/Score';
import { useState } from 'react';
function App() {
  const olasılıklar = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);
  const [playerX, setPlayerX] = useState(true);
  const [score, setScore] = useState({ PlayerXScore: 0, PlayerOScore: 0 });
  const [winner, setWinner] = useState('');

  // oyucunların kutuların içerisine tıkladığı zaman ne olacağını belirleyen fonksiyon
  const handleValue = (boxIndex) => {
    const newGameBoard = gameBoard.map((item, index) => {
      if (boxIndex === index) {
        return playerX ? 'X' : 'O';
      } else {
        return item;
      }
    });
    setGameBoard(newGameBoard);
    const winner = checkWinner(newGameBoard);

    if (winner) {
      if (winner === 'X') {
        setWinner(' OYUNCU X KAZANDI!');
        let { PlayerXScore } = score;
        PlayerXScore += 1;
        setScore({ ...score, PlayerXScore });
      } else {
        setWinner(' OYUNCU Y KAZANDI!');
        let { PlayerOScore } = score;
        PlayerOScore += 1;
        setScore({ ...score, PlayerOScore });
      }
    }

    setPlayerX(!playerX);
  };
  // kazananın kim olduğunu belirleyen fonksiyon
  const checkWinner = (gameBoard) => {
    for (let i = 0; i < olasılıklar.length; i++) {
      const [x, y, z] = olasılıklar[i];
      if (
        gameBoard[x] &&
        gameBoard[x] === gameBoard[y] &&
        gameBoard[y] === gameBoard[z]
      ) {
        setGameOver(true);
        return gameBoard[x];
      }
    }
  };
  // oyunu tekrardan başlatan fonksiyon
  const resetTheGame = () => {
    setGameOver(false);
    setGameBoard(Array(9).fill(null));
  };

  return (
    <div className='App'>
      <Score score={score} xPlaying={playerX} />
      <GameBoard
        board={gameBoard}
        onClick={gameOver ? resetTheGame : handleValue}
      />
      <ResetGame resetTheGame={resetTheGame} />
      {gameOver ? <div id='winner'>{winner}</div> : null}
    </div>
  );
}

export default App;
