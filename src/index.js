import './style.css';
import Scores from './items.js';
import getURL from './targetUrl.js';

const form = document.querySelector('.score_form');
const playerName = document.getElementById('name');
const playerScore = document.getElementById('score');
const refreshScores = document.getElementById('refresh');
const scoreListContainer = document.querySelector(
  '.scores_list_container',
);

const setNewScore = async (newScore) => {
  try {
    const result = await fetch(await getURL(), {
      method: 'POST',
      body: JSON.stringify(newScore),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const newScoreResult = await result.json();
    return newScoreResult;
  } catch (error) {
    return error;
  }
};

const addScore = async (newScore) => {
  const scoreContainer = document.createElement('li');
  scoreContainer.innerText = `${newScore.user}: ${newScore.score}`;

  scoreListContainer.appendChild(scoreContainer);
};

const addScores = async (savedScores) => {
  savedScores.result.forEach((score) => {
    addScore(score);
  });
};

const getScores = async () => {
  const resultSaved = await fetch(await getURL());
  const savedScores = await resultSaved.json();
  addScores(savedScores);
};
getScores();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = playerName.value;
  const score = playerScore.value;
  const newScore = new Scores(name, score);
  setNewScore(newScore);
  addScore(newScore);
  form.reset();
});

refreshScores.addEventListener('click', () => {
  scoreListContainer.innerHTML = '';
  getScores();
});