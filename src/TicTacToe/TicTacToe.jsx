import React, { useState } from 'react';
import confetti from 'canvas-confetti'

import './TicTacToe.css'
import { TURNS } from './constanst/constants'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'
import { Square } from './components/Square.jsx';


const TicTacToe = () => {

  const [board, setBoard] = useState(() => {
    const boardFromLS = window.localStorage.getItem('board');
    if (boardFromLS) return JSON.parse(boardFromLS);
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X;
  });

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null);
  const [gameStart, setGameStart] = useState(false);

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    setGameStart(false);
    resetGameStorage()
  };

  const updateBoard = (index) => {
    setGameStart(true);
    // no actualizamos esta posición
    // si ya tiene algo
    if (board[index] || winner) return
    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // guardar aqui partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      {gameStart ?  <button onClick={resetGame}>Reset del juego</button> : null}
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main >
  )
}

export default TicTacToe
