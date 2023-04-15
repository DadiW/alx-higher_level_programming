#!/usr/bin/node
const squareSize = process.argv[2];
if (isNaN(process.argv[2])) {
	console.log('Missing size');
} else {
	for ( let i = 0; i < parseInt(process.argv[2]); i++) {
		for ( let col = 0; col < parseInt(process.argv[2]); col++) {
			console.log('X');
		}
	}
}
