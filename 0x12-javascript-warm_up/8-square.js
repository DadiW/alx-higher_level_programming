#!/usr/bin/node
const squareSize = parseInt(process.argv[2]);
if (isNaN(squareSize) {
	console.log('Missing size');
} else {
	for ( let i = 0; i < squareSize; i++) {
		for ( let col = 0; col < squareSize; col++) {
			console.log('X');
		}
	}
}
