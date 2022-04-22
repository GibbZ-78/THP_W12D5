class Morpion {
	humanPlayer = 'J1';
	iaPlayer = 'J2';
	gameOver = false;
	gridMap = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	];

	constructor(firstPlayer = 'J1') {
		this.humanPlayer = firstPlayer;
		this.iaPlayer = (firstPlayer === 'J1') ? 'J2' : 'J1';
		this.initGame();
	}

	initGame = () => {
		this.gridMap.forEach((line, y) => {
			line.forEach((cell, x) => {
				this.getCell(x, y).onclick = () => {
					this.doPlayHuman(x, y);
				};
			});
		});

		if (this.iaPlayer === 'J1') {
			this.doPlayIa();
		}
	}

	getCell = (x, y) => {
		const column = x + 1;
		const lines = ['A', 'B', 'C'];
		const cellId = `${lines[y]}${column}`;
		return document.getElementById(cellId);
	}

	getBoardWinner = (board) => {
		const isWinningRow = ([a, b, c]) => (
			a !== null && a === b && b === c
		);
		let winner = null;
		// Horizontal
		board.forEach((line) => {
			if (isWinningRow(line)) {
				winner = line[0];
			}
		});
		// Vertical
		[0, 1, 2].forEach((col) => {
			if (isWinningRow([board[0][col], board[1][col], board[2][col]])) {
				winner = board[0][col];
			}
		});
		if (winner) {
			return winner;
		}
		// Diagonal
		const diagonal1 = [board[0][0], board[1][1], board[2][2]];
		const diagonal2 = [board[0][2], board[1][1], board[2][0]];
		if (isWinningRow(diagonal1) || isWinningRow(diagonal2)) {
			return board[1][1];
		}
		const isFull = board.every((line) => (
			line.every((cell) => cell !== null)
		));
		return isFull ? 'tie' : null;
	}

	checkWinner = (lastPlayer) => {
		const winner = this.getBoardWinner(this.gridMap);
		if (!winner) {
			return;
		}

		this.gameOver = true;
		switch (winner) {
			case 'tie':
				this.displayEndMessage("Vous êtes à égalité !");
				break;
			case this.iaPlayer:
				this.displayEndMessage("L'IA a gagné !");
				break;
			case this.humanPlayer:
				this.displayEndMessage("Tu as battu l'IA !");
				break;
		}
	}

	displayEndMessage = (message) => {
		const endMessageElement = document.getElementById('end-message');
		endMessageElement.textContent = message;
		endMessageElement.style.display = 'block';
	}

	drawHit = (x, y, player) => {
		if (this.gridMap[y][x] !== null) {
			return false;
		}

		this.gridMap[y][x] = player;
		this.getCell(x, y).classList.add(`filled-${player}`);
		this.checkWinner(player);
		return true;
	}

	doPlayHuman = (x, y) => {
		if (this.gameOver) {
			return;
		}

		if (this.drawHit(x, y, this.humanPlayer)) {
			this.doPlayIa();
		}
	}

	// Algorithme de jeu automatique basé sur la première case libre
	algoIaFirstFreeCell() {
		console.log("*** Entering 'algoIaFirstFreeCell'");
		let hasPlayed = false;
		this.gridMap.forEach((line, y) => {
			line.forEach((cell, x) => {
				if (!cell && !hasPlayed) {
					hasPlayed = this.drawHit(x, y, this.iaPlayer);
					if (hasPlayed) {
						console.log(`  > L'IA joue en x=${x} et y=${y}`);
					}
				}
			});
		});
		console.log("*** Exiting 'algoIaFirstFreeCell'");
	}

	// Algorithme de jeu automatique basé sur une case libre prise au hasard
	algoIaRandom() {
		console.log("*** Entering 'algoIaRandom'");
		let hasPlayed = false;
		let possibleCoords = [0, 1, 2];
		while (!hasPlayed) {
			let myX = this.getRandomIntInclusiveExcluding(0, 2, []);
			let myY = this.getRandomIntInclusiveExcluding(0, 2, []);
			hasPlayed = this.drawHit(myX, myY, this.iaPlayer);
			if (hasPlayed) {
				console.log(`  > L'IA joue en x=${myX} et y=${myY}`);
			} else {
				console.log(`  > L'IA tente, sans succès, en x=${myX} et y=${myY}`);
			}
		}
		console.log("*** Exiting 'algoIaRandom'");
	}

	// PSEUDO-CODE
	// function  minimax(node, depth, maximizingPlayer) is
	//   if depth = 0 or node is a terminal node then
	//       return the heuristic value of node
	//   if maximizingPlayer then
	//       value := −∞
	//       for each child of node do
	//           value := max(value, minimax(child, depth − 1, FALSE))
	//       return value
	//   else (* minimizing player *)
	//       value := +∞
	//       for each child of node do
	//           value := min(value, minimax(child, depth − 1, TRUE))
	//       return value

	// Algorithme de jeu basé sur le calcul du coup à plus grande probabilité projetée de victoire
	algoIaMinMax(myNode, myDepth,) {

	}

	doPlayIa = () => {
		if (this.gameOver) {
			return;
		}
		// this.algoIaFirstFreeCell();
		this.algoIaRandom();
		// algoIaMinMax();
	}

	// Returns an Integer between "min" (included) and "max" (included)
	// But excluding the (already drawn) values stored into "myExclusions"
	getRandomIntInclusiveExcluding(myMin, myMax, myExclusions) {
		let min = Math.ceil(myMin);
		let max = Math.floor(myMax);
		let shouldstop = false;
		let draw = undefined;
		while (!shouldstop) {
			draw = Math.floor(Math.random() * (max - min + 1)) + min;
			shouldstop = !myExclusions.includes(draw);
		}
		return draw;
	}

}
