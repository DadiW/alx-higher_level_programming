#!/usr/bin/node
const sqrsize = parseInt(process.argv[2]);
if (isNaN(sqrsize) {
	console.log('Missing size');
} else {
	for ( let i = 0; i < sqrsize; i++) {
		for ( let col = 0; col < sqrsize; col++) {
			console.log('X');
		}
	}
}
