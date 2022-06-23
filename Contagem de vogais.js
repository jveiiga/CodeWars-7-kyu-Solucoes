function getCount(str) {

    let vogal = 'aeiou'
    let string = str.split("")
    let res = 0

    for( let i = 0; i < string.length; i++ ) {

        for( let j = 0; j < vogal.length; j++ ) {

            if( string[i] == vogal[j] ) {

                res += string[i].length
            }
        }   
    }
    return res
  }
  console.log(getCount("abracadabra"))
  console.log(getCount("opqidnakldjlzdhgfmuihrpijaoao"))