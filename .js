'use strict';

{
const question = document.getElementById('question');
const choices = document.getElementById('choices');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const scoreLabel = document.querySelector('#result > p');
const startBtn = document.getElementById('startBtn');
const start = document.getElementById('start');
const container =document.getElementById('container');


const quizSet = shuffle([
{q:'porta' , c:[ 'ドア' , '家' ,'ポット' ]},
{q:'janela' , c:[ '窓' , 'テーブル' ,'１月' ]},
{q:'lavar o rost' , c:[ '顔を洗う' , '電車に乗る' ,'服を着る' ]},
{q:'ligar para...' , c:[ '〜に電話をする' , '〜に手紙を書く' ,'〜を買う' ]},
{q:'lavar a roupa' , c:[ '洗濯をする' , '部屋を片付ける' ,'入浴する' ]},
{q:'correr' , c:[ '走る' , '泳ぐ' ,'踊る' ]},
{q:'procurar' , c:[ '探す' , '買う' ,'食べる']},
{q:'viagem' , c:[ '旅行', '公園' ,'結婚' ]},
{q:'rapaz' , c:[ '青年' , '動物' ,'人間' ]},
{q:'preto', c:[ '黒い' , '赤い' ,'黄色い' ]},


]);

let currentNum = 0;
let isAnswered;
let score = 0;

function shuffle(arr){
  for(let i = arr.length-1; i > 0 ; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[j],arr[i]] = [arr[i],arr[j]];
  }
  
  return arr;
}

function checkAnswer(li) {
  if(isAnswered){
    return;
  }
  isAnswered = true;
  if(li.textContent === quizSet[currentNum].c[0]){
    li.classList.add('correct');
    score++;
  } else {
    li.classList.add('wrong');
  }

  btn.classList.remove('disabled');
}

function setQuiz () {
  isAnswered = false;
  question.textContent = quizSet[currentNum].q;

   while(choices.firstChild){
     choices.removeChild(choices.firstChild);
   }

  const shuffledChoices = shuffle([...quizSet[currentNum].c]);
  shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener('click',() => {
    checkAnswer(li);
    });
    choices.appendChild(li);

  });

  if(currentNum === quizSet.length-1){
    btn.textContent='スコアを見る';
  }



}

startBtn.addEventListener('click', () => {
  start.classList.add('hidden')
  container.classList.remove('containerHidden')

  setQuiz();

});

btn.addEventListener('click', () => {
  if(btn.classList.contains('disabled')){
    return;
  }
  btn.classList.add('disabled');

  if(currentNum === quizSet.length - 1){
    // console.log(`Score:${score}/${quizSet.length}`);
    result.classList.remove('hidden');
    scoreLabel.textContent= `スコア:${score}/${quizSet.length}`;
  }else{
    currentNum++;
    setQuiz();

  }
  
  
  
  
});




}
