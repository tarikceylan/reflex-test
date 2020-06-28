const gameArea = document.getElementById('gameArea'),
	header = document.querySelector('h1'),
	par = document.querySelector('p');

//COLOR PALETTE
const colors = [
	{
		label : 'blue',
		color : '#456AAF'
	},
	{
		label : 'red',
		color : '#D84E4E'
	},
	{
		label : 'green',
		color : '#5DC144'
	}
];

const blue = colors[0].color,
	red = colors[1].color,
	green = colors[2].color,
	//Largest and lowest times to change color.
	lowest = Math.ceil(2500),
	highest = Math.floor(10000);

let gameStarted = false,
	gameGoing = false,
	colorChanged = false,
	gameOver = false,
	startTime,
	endTime,
	highScore;

	

gameArea.addEventListener('mousedown', () => {
	if (
		(gameStarted === false && gameGoing === false && gameOver === true) ||
		(gameStarted === false && gameGoing === false && gameOver === false)
	) {
		gameArea.style.backgroundColor = red;
		header.textContent = 'Wait for green...';
		par.textContent = '';
		changeGreen();
		gameStarted = true;
		gameGoing = true;
		gameOver = false;
	}
	else if (gameStarted === true && gameGoing === true && colorChanged === false) {
		gameArea.style.backgroundColor = blue;
		clearTimeout(timeOut);
		header.textContent = 'Too Soon!';
		par.textContent = 'Click To Try Again';
		gameStarted = false;
		gameGoing = false;
		colorChanged = false;
		gameOver = true;
	}
	else if (gameStarted === true && gameGoing === true && colorChanged === true && gameOver === false) {
		endTime = new Date();
		let score = endTime - startTime;
		header.textContent = `${score} ms`;
		par.textContent = 'Click to try again...';
		gameOver = true;
		gameStarted = false;
		gameGoing = false;
		colorChanged = false;
		console.log(endTime);
	}
});

const changeGreen = () => {
	let rand = Math.floor(Math.random() * (highest - lowest + 1) + lowest);
	timeOut = setTimeout(() => {
		gameArea.style.backgroundColor = green;
		startTime = new Date();
		header.textContent = 'Click!';
		par.textContent = '';
		colorChanged = true;
		console.log('Color changed');
		console.log(startTime);
	}, rand);
};


