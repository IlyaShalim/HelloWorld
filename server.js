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

function findIn(fer, n, da) {
	let q;
	let d = da;
	for (let key in fer) {
		if (typeof (fer[key]) === 'object') {
			q = fer[key];
			da = da + key + '.';
		}
		if (n == fer[key]) {
			let dat =d + key + '.';
			alert(dat);
		}
		
	}

	if (q) findIn(q, n, da)
	}

findIn(data, '111', '');
findIn(data, '123', '');
