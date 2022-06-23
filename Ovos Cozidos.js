function cookingTime(eggs) {
    
    let min = 0;

    for( let i = 0; i < eggs; i++ ) {

          if( i % 8 == 0 ) { //quantidade máxima de ovos 8
     
            min += 5 //tempo máximo para ferver os ovos 

          }
        }
   
        return min

}
      

console.log(cookingTime(0))
console.log(cookingTime(5))
console.log(cookingTime(10))

