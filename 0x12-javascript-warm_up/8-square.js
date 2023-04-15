#!/usr/bin/node
const sqrsize = parseInt(process.argv[2]);
if (Number.isNaN(sqrsize) {
	console.log('Missing size');
} else {
	for ( let i = 0, rw; i < sqrsize; i++) {
		rw = '';
		for ( let col = 0; col < sqrsize; col++) {
			rw += 'X';
		}
		console.log(rw);
	}
}
