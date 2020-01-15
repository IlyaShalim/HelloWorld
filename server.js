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

function findIn(data, n) {
	for (let key in data) {
		let dat = '';
		
		if (n == data[key]) {
			dat += key;
			alert(dat)
		};
		let q = data[key];
		
		for (let key in q) {
			dat = 'a,'
			if (n == q[key]) {
				dat += key;
				alert(dat)
			};
			let w = q[key];
			for (let key in w) {
				let dat = 'a,b,'
				if (n == w[key]) {
					dat += key;
					alert(dat)
				};
				
			}
		}
	}
	//let vsePut = da + ',' + dat;
	//return vsePut;
	}

//findIn(data, '111')

findIn(data, '111');


findIn(data, '123');


