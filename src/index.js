module.exports = function reverse (n) {
	let str = String(n)
	if(str[0] === '-') { str = str.slice(1);}
	return Number( str.split("").reverse().join("") );
}
