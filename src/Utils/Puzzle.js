import axios from 'axios';

let coords = {};
// export const arr = {
// 	0: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	1: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	2: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	3: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	4: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	5: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	6: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	7: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	8: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	9: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	10: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	11: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	12: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	13: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	14: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	15: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	16: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	17: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	18: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	19: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// 	20: [
// 		'a',
// 		'b',
// 		'c',
// 		'd',
// 		'e',
// 		'f',
// 		'g',
// 		'h',
// 		'i',
// 		'j',
// 		'k',
// 		'l',
// 		'm',
// 		'n',
// 		'o',
// 		'p',
// 		'q',
// 		'r',
// 		's',
// 		't',
// 	],
// };

let alphabets = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];
let arr = [];
let filledPos = [];
let wordArr;

export const randomTableGen = async (p, q) => {
	for (let i = 0; i < p; i++) {
		let checkArr = [];
		for (let j = 0; j < q; j++) {
			let randomNum = Math.floor(Math.random() * alphabets.length);
			checkArr.push(alphabets[randomNum]);
		}
		arr.push(checkArr);
	}
	await setPuzzle(p, q);
	return arr;
};

const setPuzzle = async (p, q) => {
	let { data } = await axios.get('http://localhost:8000/api/v1/snake');

	wordArr = data.words;
	const letters = wordArr;
	// randomTableGen(p, q);
	/**
	 * alignment => 0 (Vertical)
	 * alignment => 1 (Horizontal)
	 */

	for (let i = 0; i < letters.length; i++) {
		let alignment = Math.round(Math.random() * 10) % 2 === 0 ? 0 : 1;
		const a = Math.floor(Math.random() * p);
		const b = Math.floor(Math.random() * q);
		let word = letters[i];
		if (!!alignment && q - b > word.length) {
			console.log('Horizontal');
			for (
				let j = 0, l = b;
				j < word.length && l <= b + word.length;
				j++, l++
			) {
				//	for (let l = b; l < b + word.length; l++) {
				if (!filledPos.some((el) => el.x === a && el.y === l)) {
					filledPos.push({ x: a, y: l });
					arr[a][l] = word[j];
				} else {
					i === 0 ? (i = 0) : i--;
					filledPos = filledPos.splice(filledPos.length - 1 - j);

					break;
				}
				//	}
			}
		} else if (!!alignment === false && p - a > letters[i].length) {
			console.log('Vertical');
			for (
				let j = 0, m = a;
				j < word.length && m <= a + word.length;
				j++, m++
			) {
				// for (let m = a; m < a + word.length; m++) {
				if (!filledPos.some((el) => el.x === m && el.y === b)) {
					filledPos.push({ x: m, y: b });
					arr[m][b] = word[j];
				} else {
					i === 0 ? (i = 0) : i--;
					filledPos = filledPos.splice(filledPos.length - 1 - j);
					break;
				}
				//	}
			}
		} else {
			i--;
		}
	}
};

/**
 *
 * @param {Number} x X coordinate
 * @param {Number} y Y coordinate
 * @param {String} val value
 */
export const setCoords = (x, y, val) => {
	coords[`${x},${y}`] = val;
};
export const getCoords = () => coords;
export const searchCoords = (x, y) => {
	if (coords[`${x},${y}`]) {
		return coords[`${x},${y}`];
	}
	return null;
};

export const Letters = () => {
	return wordArr;
};
