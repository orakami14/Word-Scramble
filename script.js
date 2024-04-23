const words = [
   'apple',
   'banana',
   'cherry',
   'grape',
   'kiwi',
   'lemon',
   'mango',
   'orange',
   'pineapple',
   'strawberry',
   'dragon fruit',
   'pear',
   'jackfruit',
   'watermelon',
   'peach',

 ];
 
 const wordElement = document.querySelector('#word');
 const inputWord = document.querySelector('#inputWord');
 const error = document.querySelector('.error');
 const scoreElement = document.querySelector('#score');
 const checkBtn = document.querySelector('#check');
 const refreshBtn = document.querySelector('#refresh');
 const timeElement = document.querySelector('#time');
 
 let score = 0;
 let timeLeft = 30;
 let timerId;
 let currentWord;
 
 function scrambleWord(word) {
   const chars = word.split('');
 for (let i = chars.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [chars[i], chars[j]] = [chars[j], chars[i]];
   }
   return chars.join('');
 }
 
 function getNewWord() {
   const randomIndex = Math.floor(Math.random() * words.length);
   currentWord = words[randomIndex];
   const scrambledWord = scrambleWord(currentWord);
   wordElement.textContent = scrambledWord;
 }
 
 function checkWord() {
   const enteredWord = inputWord.value.toLowerCase();
   const correctWord = currentWord.toLowerCase();
 
   if (enteredWord === correctWord) {
     score += 2;
     scoreElement.textContent = score;
     error.textContent = '';
     inputWord.value = '';
     wordElement.textContent = currentWord;
     setTimeout(() => {
       getNewWord();
     }, 1000);
     alert(`Correct! The word was ${currentWord}.`);
   } else {
     error.textContent = 'Wrong word!';
     inputWord.value = '';
   }
 }
 
 function startTimer() {
   timeLeft = 30;
   timeElement.textContent = timeLeft;
   timerId = setInterval(() => {
     timeLeft--;
     timeElement.textContent = timeLeft;
 
     if (timeLeft === 0) {
       clearInterval(timerId);
       timeElement.textContent = 'Time is up!';
       inputWord.disabled = true;
       checkBtn.disabled = true;
       refreshBtn.disabled = false;
     }
   }, 1000);
 }
 
 function refreshGame() {
   score = 0;
   scoreElement.textContent = score;
   clearInterval(timerId);
   timeLeft = 60;
   timeElement.textContent = timeLeft;
   inputWord.disabled = false;
   checkBtn.disabled = false;
   refreshBtn.disabled = false;
   getNewWord();
   inputWord.value = '';
   error.textContent = '';
   startTimer();
 }
 
 checkBtn.addEventListener('click', checkWord);
 refreshBtn.addEventListener('click', refreshGame);
 
 getNewWord();
 startTimer();
