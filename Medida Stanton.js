function stantonMeasure(arr) {

    let num = 0

    for( let i = 0; i < arr.length; i++ ) {

        if(arr[i] == 1) {
            
            num++
           
        }
    }

    let stanton = 0

    for( let i = 0; i < arr.length; i++ ) {

        if(arr[i] == num) {

           
            stanton++

        }
    }

    return stanton

}
console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2, 3, 2, 1]))