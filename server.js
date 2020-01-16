'use strict';
const data = {
	a: {
		b: {
			c: '111',
			d: '123',
		},
		a: '111',
	},
};
let arr = [];
function findIn(fer, n, da, arr) {
	let q;
	let d = da;
	for (let key in fer) {
		if (typeof (fer[key]) === 'object') {
			q = fer[key];
			da = da + key + '.';
		}
		if (n == fer[key]) {
			let dat = d + key + '.';
			arr.push(dat);
		}
		
	}

	if (q) findIn(q, n, da, arr)
	return arr;
	}

alert(findIn(data, '111', '', arr = []));
alert(findIn(data, '123', '', arr = []));
