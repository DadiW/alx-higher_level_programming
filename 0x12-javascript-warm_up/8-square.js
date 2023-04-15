#!/usr/bin/node
const sqrsize = process.argv[2];
if (isNaN(parseInt(sqrsize)) {
	console.log('Missing size');
} else {
	for ( let i = 0; i < parseInt(sqrsize); i++) {
		let rw = '';
		for ( let col = 0; col < parseInt(sqrsize); col++) {
			rw += 'X';
		}
		console.log(rw);
	}
}
