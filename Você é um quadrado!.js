function isSquare(num) {
  if( num < 0 ) {
      return false
  }
  for( i = 0; i <= num; i++ ) {
    result = i * i
    if( result === num ){
        return true;
    } 
  }
  return false;
}
console.log(isSquare(-1))
console.log(isSquare(0))
console.log(isSquare(3))
console.log(isSquare(4))
console.log(isSquare(25))
console.log(isSquare(26))
