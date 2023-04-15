#!/usr/bin/node
const sz = parseInt(process.argv[2]);
if (Number.isNaN(sz)) {
	console.log('Missing size');
} else {
	for (let i, r; i < sz; i++) {
		r = '';
		for (let c = 0; c < sz; c++) {
			r += 'X';
		}
		console.log(r);
	}
}
