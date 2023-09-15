import Items from './items.js';
import './style.css';


const scores = [
  {
    player: 'name',
    score: 3,
    index: 0,
  },
  {
    player: 'name',
    score: 5,
    index: 1,
  },
  {
    player: 'name',
    score: 9,
    index: 2,
  },
  {
    player: 'name',
    score: 10,
    index: 3,
  },
  {
    player: 'name',
    score: 2,
    index: 4,
  },
  {
    player: 'name',
    score: 8,
    index: 5,
  },
  {
    player: 'name',
    score: 6,
    index: 6,
  },
];
const scoreListContainer = document.querySelector('.scores_list_container');

const displayScores = () => {
  scores.forEach((item) => {
    const newScore = new Items(item.player, item.score, item.index);
    const scoreContainer = document.createElement('li');
    scoreContainer.innerText = `${newScore.player}: ${newScore.score}`;
    scoreListContainer.appendChild(scoreContainer);
    return newScore;
  });
};
displayScores();