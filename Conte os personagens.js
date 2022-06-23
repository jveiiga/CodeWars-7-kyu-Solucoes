function countChar(str, char) {

    let res = 0
    
    for( let i = 0; i < str.length; i++ ) {
    
        if( str[i].toLowerCase() === char || str[i].toUpperCase() === char ) {

            res += str[i].length

        }
    }
    
    return res
  
}
console.log(countChar("fizzbuzz", "z"));