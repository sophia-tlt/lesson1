function valueNumber (x) {
  for (let i=1; i<x; i++) {
  if (x%i==0 && i!==1) {
  	return false;
      }
  }
  return true;
}

function getNumber (a,b) {
	let first = [];
 for (let k=a; k<=b; k++) {
 	if (valueNumber(k)) {
 		first.push(k);
 	}
 }
 for (let j = 0; j<=100; j++) {
 	document.write('Делители этого числа: 1 и ' + first[j] + '</br>');
}
}
getNumber(1,100);

