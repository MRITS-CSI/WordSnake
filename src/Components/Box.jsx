import React from 'react';
import { arr, getCoords, setCoords } from '../Utils/Puzzle';

const Box = () => {
	let nx, ny;
	let scale = 30;
	let filledCoords = [];
	let previousMove;

	// var press=false;
	/**
	 * Namespace
	 */
	let Game = {};
	let Keyboard = {};
	let Component = {};

	/**
	 * Keyboard Map
	 */
	Keyboard.Keymap = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down',
		32: 'space',
		space: false,
	};

	/**
	 * Keyboard Events
	 */

	Keyboard.ControllerEvents = function () {
		// Setts
		let self = this;
		this.pressKey = null;
		this.keymap = Keyboard.Keymap;

		// Keydown Event
		document.onkeydown = function (event) {
			self.pressKey = event.which;
		};
		document.onkeyup = (event) => {
			if (event.keyCode === 32) {
				Keyboard.Keymap.space = false;
			}
		};
		// document.body.onkeydown = (e) => {
		// 	if (e.code === 'Space') {

		// 		// let canvas = document.getElementById('stage');
		// 		// let context = canvas.getContext('2d');
		// 		// context.fillStyle = 'Orange';
		// 		// context.lineTo(nx, ny);
		// 		// context.fillRect(nx, ny, scale, scale);

		// 		if (searchCoords(nx, ny) === 'q') {
		// 			alert('Space pressed');

		// 			console.log(searchCoords(nx, ny));
		// 		}
		// if(press===false){
		// 	press =true;
		// }
		// else{
		// 	press=false;
		// }
		//	}
		//	};

		// Get Key
		this.getKey = function () {
			return this.keymap[this.pressKey];
		};
	};

	/**
	 * Game Component Stage
	 */
	Component.Stage = function (canvas, conf) {
		// Sets
		this.keyEvent = new Keyboard.ControllerEvents();
		this.width = canvas.width;
		this.height = canvas.height;
		this.length = [];
		this.food = {};
		this.score = 0;
		this.direction = 'right';
		this.conf = {
			cw: 10,
			size: 7,
			fps: 1000,
		};

		// Merge Conf
		if (typeof conf == 'object') {
			for (let key in conf) {
				if (conf.hasOwnProperty(key)) {
					this.conf[key] = conf[key];
				}
			}
		}
	};

	/**
	 * Game Component Snake
	 */
	Component.Snake = function (canvas, conf) {
		// Game Stage
		this.stage = new Component.Stage(canvas, conf);

		// Init Snake
		this.initSnake = function () {
			// Itaration in Snake Conf Size
			for (let i = 0; i < this.stage.conf.size; i++) {
				// Add Snake Cells
				this.stage.length.push({ x: i * scale + 30, y: 30 });
			}
		};

		// Call init Snake
		this.initSnake();

		// Init Food
		this.initFood = function () {
			// Add food on stage
			this.stage.food = {
				x: Math.round(
					(Math.random() * (this.stage.width - this.stage.conf.cw)) /
						this.stage.conf.cw
				),
				y: Math.round(
					(Math.random() * (this.stage.height - this.stage.conf.cw)) /
						this.stage.conf.cw
				),
			};
		};

		// Init Food
		//this.initFood();

		// Restart Stage
		this.restart = function () {
			filledCoords = [];
			this.stage.length = [];
			this.stage.food = {};
			this.stage.score = 0;
			this.stage.direction = 'right';
			this.stage.keyEvent.pressKey = null;
			this.initSnake();
			this.initFood();
		};
	};

	/**
	 * Game Draw
	 */
	Game.Draw = function (context, snake) {
		// Draw Stage
		this.drawStage = function () {
			//	console.log(nx, ny);
			// Check Keypress And Set Stage direction
			let keyPress = snake.stage.keyEvent.getKey();
			if (typeof keyPress != 'undefined' && typeof keyPress != 'function') {
				snake.stage.direction = keyPress;
			} else if (typeof keyPress === 'function') {
			}

			// Draw White Stage
			context.fillStyle = 'white';
			context.fillRect(0, 0, snake.stage.width, snake.stage.height);
			context.font = '15px Arial';
			context.beginPath();
			// for (let i = 5; i <= 605; i = i + 30) {
			// 	context.moveTo(i, 5);
			// 	context.lineTo(i, 605);
			// 	context.moveTo(5, i);
			// 	context.lineTo(605, i);

			// 	context.strokeStyle = '#000';
			// 	context.stroke();
			// }
			// Snake Position
			//console.log(snake.stage);
			nx = snake.stage.length[0].x;
			ny = snake.stage.length[0].y;
			//	console.log(snake.stage.length[0]);
			// Add position by stage direction
			// eslint-disable-next-line default-case
			switch (snake.stage.direction) {
				case 'right':
					nx += scale;
					previousMove = { x: nx, y: null, dir: 'right' };
					break;
				case 'left':
					nx -= scale;
					previousMove = { x: nx, y: null, dir: 'left' };

					break;
				case 'up':
					ny -= scale;
					previousMove = { x: null, y: ny, dir: 'up' };

					break;
				case 'down':
					ny += scale;
					previousMove = { x: null, y: ny, dir: 'down' };
					break;
				case 'space':
					Keyboard.Keymap.space = true;
					switch (previousMove.dir) {
						case 'right':
							nx += scale;

							previousMove = { x: nx, y: null, dir: 'right' };
							break;
						case 'left':
							nx -= scale;

							previousMove = { x: nx, y: null, dir: 'left' };

							break;
						case 'up':
							ny -= scale;

							previousMove = { x: null, y: ny, dir: 'up' };

							break;
						case 'down':
							ny += scale;

							previousMove = { x: null, y: ny, dir: 'down' };
							break;
						default:
							console.log('hi');
							Keyboard.Keymap.space = false;
							break;
					}
			}

			// Check Collision
			if (this.collision(nx, ny) === true) {
				snake.restart();
				return;
			}
			let tail;
			//	Logic of Snake food
			if (nx === snake.stage.food.x && ny === snake.stage.food.y) {
				tail = { x: nx, y: ny };
				snake.stage.score++;
				snake.initFood();
			} else {
				tail = snake.stage.length.pop();
				tail.x = nx;
				tail.y = ny;
			}
			snake.stage.length.unshift(tail);

			// Draw Snake
			for (let i = 0; i < snake.stage.length.length; i++) {
				let cell = snake.stage.length[i];
				this.drawCell(cell.x, cell.y);
			}

			// // Draw Food
			//	this.drawCell(snake.stage.food.x, snake.stage.food.y);

			// Draw Score
			context.fillStyle = 'black';
			// Random Alphabet generator
			// let count = 1;
			// for (let j = 1, k = 5; j <= 20 && k <= 605; j++, k += 30.5) {
			// 	for (let i = 0, l = 15; i < 20 && l <= 605; i++, l += 30.15) {
			// 		context.fillText(arr[j][i], l, k + 17);
			// 		setCoords(Math.floor(l / 10), Math.floor((k + 17) / 10), arr[j][i]);
			// 	}
			// }
			for (
				let i = 0, p = 30;
				p < snake.stage.width && i < snake.stage.width / scale;
				p += scale, i++
			) {
				for (
					let j = 0, q = 30;
					q < snake.stage.height && j < snake.stage.height / scale;
					q += scale, j++
				) {
					context.fillText(arr[j][i], p, q);
					context.strokeRect(p - scale / 2, q - scale / 2, scale, scale);
					// if(press===true){
					// 	context.fillRect(nx-scale/2,ny-scale/2,scale,scale);
					// }

					setCoords(p, q, arr[j][i]);
				}
			}
			if (Keyboard.Keymap.space === true) {
				filledCoords.push({ x: nx, y: ny });
			}
			for (const el of filledCoords) {
				context.fillStyle = 'rgba(250, 217, 55,0.6)';
				context.fillRect(el.x - scale / 2, el.y - scale / 2, scale, scale);
			}

			// for (let i = 5; i <= 605; i = i + 30.5) {
			// 	let pos = 0;
			// 	for (let j = 0; j <= 605; j = j + 30.15) {
			// 		//	console.log(arr[count][pos]);
			// 		console.log(arr[count][pos]);
			// 		context.fillText(arr[count][pos], i, j);
			// 		if (pos < 18) pos++;
			// 	}
			// 	if (count < 20) count++;
			// }
			// context.fillText(
			// 	'Score: ' + snake.stage.score,
			// 	5,
			// 	snake.stage.height - 5
			// );
		};

		// Draw Cell
		this.drawCell = function (x, y) {
			context.fillStyle = 'rgb(62, 222, 105)';
			context.beginPath();
			context.arc(x, y, scale / 2, 0, 2 * Math.PI, false);
			context.fill();
		};

		// Check Collision with walls
		this.collision = function (nx, ny) {
			if (
				nx < 0 ||
				nx >= snake.stage.width ||
				ny < 0 ||
				ny >= snake.stage.height
			) {
				return true;
			}
			//	console.log(snake.stage);
			return false;
		};
	};

	/**
	 * Game Snake
	 */
	Game.Snake = function (elementId, conf) {
		// Sets
		let canvas = document.getElementById(elementId);
		let context = canvas.getContext('2d');
		let snake = new Component.Snake(canvas, conf);

		let gameDraw = new Game.Draw(context, snake);
		//	gameDraw.drawStage();
		// Game Interval
		setInterval(function () {
			gameDraw.drawStage();
		}, snake.stage.conf.fps);
	};

	/**Grid */

	/**
	 * Window Load
	 */
	window.onload = function () {
		new Game.Snake('stage', { fps: 120, size: 7 });
	};

	return (
		<>
			<h3>Simple Snake Game</h3>
			<canvas id="stage" width="600" height="600"></canvas>
			<div>
				<button onClick={() => console.log(getCoords())}>Click Me !!!</button>
			</div>
		</>
	);
};

export default Box;
